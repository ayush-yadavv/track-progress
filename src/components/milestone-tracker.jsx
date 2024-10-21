"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Gift, HelpCircle } from "lucide-react";
import { useEffect, useState } from "react";

const milestones = [
  {
    label: "Milestone 1",
    color: "from-pink-600 via-purple-600 to-blue-600",
    // range: "1 to 16",
    winner: "aslfal",
  },
  {
    label: "Milestone 2",
    color: "from-green-600 via-teal-600 to-cyan-600",
    // range: "1 to 32",
    winner: "",
  },
  {
    label: "Milestone 3",
    color: "from-yellow-600 via-orange-600 to-red-600",
    // range: "1 to 48",
    winner: "",
  },
  {
    label: "Milestone 4",
    color: "from-indigo-600 via-violet-600 to-purple-600",
    // range: "1 to 64",
    winner: "",
  },
  {
    label: "Ultimate Milestone",
    color: "from-rose-600 via-pink-600 to-fuchsia-600",
    // range: "1 to 80",
    winner: "asasi",
  },
];

export function MilestoneTracker({
  totalParticipants = 80,
  currentParticipants = 14,
}) {
  const [progress, setProgress] = useState(Array(5).fill(0));
  const [winners, setWinners] = useState(Array(5).fill(""));

  useEffect(() => {
    const cappedParticipants = Math.min(currentParticipants, totalParticipants);
    const newProgress = milestones.map((_, index) => {
      const milestoneMax = Math.min((index + 1) * 16, totalParticipants);
      return Math.min((cappedParticipants / milestoneMax) * 100, 100);
    });
    setProgress(newProgress);

    // Simulate winners (in a real app, this would be fetched from a backend)
    const newWinners = [
      cappedParticipants >= 16 ? "winner1@example.com" : "",
      cappedParticipants >= 32 ? "winner2@example.com" : "",
      cappedParticipants >= 48 ? "winner3@example.com" : "",
      cappedParticipants >= 64 ? "winner4@example.com" : "",
      cappedParticipants >= 80 ? "winner5@example.com" : "",
    ];
    setWinners(newWinners);
  }, [currentParticipants, totalParticipants]);

  const calculateParticipants = (index) => {
    const milestoneMax = Math.min((index + 1) * 16, totalParticipants);
    return Math.min(currentParticipants, milestoneMax);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6 bg-gray-900 text-gray-100 rounded-lg shadow-lg">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-blue-400">
          Microsoft Security, Compliance, and Identity Fundamentals
        </h2>
        <Button
          asChild
          variant="outline"
          className="bg-green-700 hover:bg-green-600 text-white border-green-500"
        >
          <a
            href="https://learn.microsoft.com/en-us/plans/5dyyborpmok24n?tab=tab-created&learnerGroupId=e267bc4d-d723-49cd-81de-a38e13f3d5ab&wt.mc_id=studentamb_302123"
            className="inline-flex items-center"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Complete Module
          </a>
        </Button>
      </div>
      <h3 className="text-2xl font-semibold text-center text-blue-400">
        Progress
      </h3>
      <div className="space-y-4">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="space-y-2 bg-gray-800 p-4 rounded-lg shadow"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-blue-300">
                {milestone.label}
              </span>
              <span className="text-sm font-medium text-blue-300">
                {progress[index].toFixed(1)}%
              </span>
            </div>
            <Progress value={progress[index]} className="h-2 bg-gray-700">
              <div
                className={`h-full bg-gradient-to-r ${milestone.color}`}
                style={{ width: `${progress[index]}%` }}
              />
            </Progress>
            <div className="flex justify-between text-xs">
              <span className="text-blue-300">
                {calculateParticipants(index)} out of{" "}
                {Math.min((index + 1) * 16, totalParticipants)} participants
              </span>
              {winners[index] && (
                <span className="font-medium text-green-400">
                  Winner: {winners[index]}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <Accordion type="single" collapsible className="bg-gray-800 rounded-lg">
        <AccordionItem value="steps">
          <AccordionTrigger className="text-blue-400 hover:text-blue-300">
            <div className="flex items-center">
              <HelpCircle className="mr-2 h-4 w-4" />
              How It Works
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-gray-300">
            <div className="p-4 space-y-4">
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Complete the Microsoft Security, Compliance, and Identity
                  Fundamentals module.
                </li>
                <li>
                  Click the &quot;Fill this after completion&quot; button to
                  enter the giveaway.
                </li>
                <li>
                  Track your progress through the 5 milestones on this page.
                </li>
                <li>
                  Each milestone represents a range of participants (e.g., 1-16,
                  1-32, etc.).
                </li>
                <li>
                  As more people complete the module, the progress bars will
                  update.
                </li>
                <li>
                  When a milestone is reached, a winner is randomly selected for
                  a ₹100 Amazon gift card.
                </li>
                <li>
                  Winners&apos; email addresses are displayed next to their
                  respective milestones.
                </li>
                <li>
                  Complete the module early to increase your chances of winning!
                </li>
              </ol>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button
        asChild
        variant="outline"
        className="w-full mt-4 bg-blue-700 hover:bg-blue-600 text-white border-blue-500"
      >
        <a
          href="https://forms.office.com/r/N3f79x12fg"
          className="inline-flex items-center justify-center"
        >
          <Gift className="mr-2 h-4 w-4" />
          Fill this after completion
        </a>
      </Button>
      <p className="text-xs text-center text-blue-300 font-medium">
        Complete the module and submit your entry to be eligible for a ₹100
        Amazon gift card. Five gift cards available, one for each milestone!
      </p>
    </div>
  );
}
