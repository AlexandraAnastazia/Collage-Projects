import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function MindSyncApp() {
  const [screen, setScreen] = useState("home");
  const [messages, setMessages] = useState([
    { sender: "AI", text: "Pozdrav! Kako se danas osjećaš?" }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [journal, setJournal] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "Ti", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      {screen === "home" && (
        <Card>
          <CardContent className="p-4 flex flex-col gap-4">
            <h1 className="text-xl font-bold">MindSync</h1>
            <Button onClick={() => setScreen("chat")}>Chat s AI terapeutom</Button>
            <Button onClick={() => setScreen("journal")}>Dnevnik emocija</Button>
            <Button onClick={() => setScreen("security")}>Sigurnosne postavke</Button>
          </CardContent>
        </Card>
      )}

      {screen === "chat" && (
        <Card>
          <CardContent className="p-4 flex flex-col gap-4">
            <h2 className="text-lg font-bold">Chat s AI terapeutom</h2>
            <div className="bg-gray-100 p-2 rounded h-64 overflow-auto">
              {messages.map((msg, index) => (
                <p key={index} className={msg.sender === "AI" ? "text-blue-600" : "text-gray-800"}>
                  <strong>{msg.sender}: </strong>{msg.text}
                </p>
              ))}
            </div>
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Upiši poruku..."
            />
            <Button onClick={sendMessage}>Pošalji</Button>
            <Button variant="secondary" onClick={() => setScreen("home")}>Natrag</Button>
          </CardContent>
        </Card>
      )}

      {screen === "journal" && (
        <Card>
          <CardContent className="p-4 flex flex-col gap-4">
            <h2 className="text-lg font-bold">Dnevnik emocija</h2>
            <Textarea
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
              placeholder="Upiši svoje misli..."
            />
            <Button variant="secondary" onClick={() => setScreen("home")}>Natrag</Button>
          </CardContent>
        </Card>
      )}

      {screen === "security" && (
        <Card>
          <CardContent className="p-4 flex flex-col gap-4">
            <h2 className="text-lg font-bold">Sigurnosne postavke</h2>
            <p>Privatnost je prioritet. End-to-end enkripcija je uključena.</p>
            <Button variant="secondary" onClick={() => setScreen("home")}>Natrag</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
