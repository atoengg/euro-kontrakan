"use client";

import React, { useEffect, useState, FormEvent } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { AnimatedQuestions } from "../elements/animatedQuis/AnimatedQuestions";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, ChatSession } from "@google/generative-ai";
import Image from "next/image";
import { avatar, botIcon } from "@/image";
import ClipLoader from "react-spinners/ClipLoader";
import { Toast } from "flowbite-react";
import { HiExclamation } from "react-icons/hi";


type Message = {
    text: string;
    role: "user" | "bot";
};

export const AiSection = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [userMessage, setUserMessage] = useState("");
    const [chat, setChat] = useState<ChatSession | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null)


    const handleFocus = () => setIsInputFocused(true);
    const handleBlur = () => setIsInputFocused(false);

    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;
    const genAI = new GoogleGenerativeAI(apiKey);

    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    useEffect(() => {
        setLoading(true);
        const initChat = async () => {
            try {
                const newChat = await genAI
                    .getGenerativeModel({ model: "gemini-1.5-pro" })
                    .startChat({
                        generationConfig,
                        safetySettings,
                        history: messages.map((msg) => ({
                            text: msg.text,
                            role: msg.role,
                            parts: [{ text: msg.text }], // menambahkan `parts`
                        })),
                    });
                setChat(newChat);
            } catch (error) {
                setError("Failed to initialize chat.");
                console.error(error);
                setToast({ type: "error", message: "Mohon maaf, Euro AI mengalami gangguan" })
            } finally {
                setLoading(false);
            }
        };
        initChat();
    }, []);

    const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!chat || !userMessage.trim()) return;

        try {
            const userMessageObj: Message = { text: userMessage, role: "user" };
            setMessages((prevMessages) => [...prevMessages, userMessageObj]);
            setUserMessage("");
            setLoading(true);

            const result = await chat.sendMessage(userMessage);
            const botMessage: Message = {
                text: (await result.response.text()) || "Error: No response",
                role: "bot",
            };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            setError("Failed to send message.");
            console.error(error);
            setToast({ type: "error", message: "Mohon maaf, Euro AI mengalami gangguan" })
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="container mx-auto flex flex-col gap-6 py-20 min-h-screen">
                <div className="flex flex-col items-center justify-center">
                    <h2
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="1000"
                        className="font-semibold text-white text-center text-[26px] lg:text-4xl font-poppins mb-4"
                    >
                        Coba Tanya Euro AI
                    </h2>
                    <div className="w-full">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex items-start max-w-xl mx-auto my-2 ${msg.role === "user" ? "justify-end" : "justify-start"
                                    }`}
                            >
                                {msg.role === "bot" && (
                                    <div className="flex-shrink-0">
                                        <Image src={botIcon} alt="icon-bot" width={30} className="rounded-full object-cover" />
                                    </div>
                                )}
                                <div
                                    className={`inline-flex items-center max-w-[80%] py-2 px-4 rounded-lg shadow-md ${msg.role === "user"
                                        ? "bg-primary-500 text-white justify-end text-right"
                                        : "bg-secondary-900 text-white justify-start text-left"
                                        }`}
                                    style={{ overflowWrap: "break-word", wordWrap: "break-word" }}
                                >
                                    {msg.text}
                                </div>
                                {msg.role === "user" && (
                                    <div className="flex-shrink-0 ml-2">
                                        <Image src={avatar} alt="icon-user" width={30} className="rounded-full object-cover" />
                                    </div>
                                )}
                            </div>
                        ))}
                        <form
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="2000"
                            onSubmit={handleSendMessage}
                            className="w-full relative max-w-xl mx-auto bg-secondary-900 h-12 rounded-full overflow-hidden shadow transition duration-200"
                        >
                            <input
                                type="text"
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                value={userMessage}
                                onChange={(e) => setUserMessage(e.target.value)}
                                className="w-full relative text-sm sm:text-base z-50 border-none text-white bg-transparent h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20"
                            />
                            <button
                                type="submit"
                                disabled={loading || !userMessage}
                                className={`absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full ${!userMessage ? "text-gray-800" : "text-white"
                                    } transition duration-200 flex items-center justify-center ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                                {loading ? (
                                    <ClipLoader color="#fffbfb" size={25} aria-label="Loading Spinner" data-testid="loader" />
                                ) : (
                                    <BsArrowRightCircleFill size={25} />
                                )}
                            </button>
                            <AnimatedQuestions isHidden={isInputFocused} />
                        </form>
                    </div>
                </div>
            </div>

            {/* toast AI error */}
            {
                toast && (
                    <div className="fixed bottom-4 right-4 z-[999]">
                        <Toast>
                            <div
                                className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200`}
                            >
                                <HiExclamation className="h-5 w-5" />
                            </div>
                            <div className="ml-3 text-sm font-normal">{toast.message}</div>
                            <Toast.Toggle onClick={() => setToast(null)} />
                        </Toast>
                    </div>
                )
            }
        </>
    );
};
