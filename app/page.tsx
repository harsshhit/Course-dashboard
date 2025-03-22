"use client";

import { useState } from "react";
import { Trophy, CheckCircle2, BarChart3 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StatCard } from "@/components/ui/stat-card";
import { Header } from "@/components/skill-test/header";
import { SyllabusAnalysis } from "@/components/skill-test/syllabus-analysis";
import { QuestionAnalysis } from "@/components/skill-test/question-analysis";
import { ComparisonGraph } from "@/components/skill-test/comparison-graph";

const syllabusTopics = [
  { name: "HTML Tools, Forms, History", progress: 80, color: "bg-blue-500" },
  { name: "Tags & References in HTML", progress: 60, color: "bg-orange-500" },
  { name: "Tables & References in HTML", progress: 24, color: "bg-red-500" },
  { name: "Tables & CSS Basics", progress: 96, color: "bg-green-500" },
];

export default function Home() {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [stats, setStats] = useState({
    rank: 1,
    percentile: 30,
    correctAnswers: "10/15",
  });

  // Parse correct answers into numbers for the QuestionAnalysis component
  const [correct, total] = stats.correctAnswers.split('/').map(Number);

  const handleUpdateStats = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    setStats({
      rank: parseInt(formData.get("rank") as string),
      percentile: parseInt(formData.get("percentile") as string),
      correctAnswers: formData.get("score") as string,
    });
    setIsUpdateModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <Header
              title="Hyper Text Markup Language"
              subtitle="Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021"
              onUpdate={() => setIsUpdateModalOpen(true)}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              <StatCard
                title="YOUR RANK"
                value={stats.rank}
                icon={<Trophy className="h-6 w-6" />}
              />
              <StatCard
                title="PERCENTILE"
                value={`${stats.percentile}%`}
                icon={<BarChart3 className="h-6 w-6" />}
              />
              <StatCard
                title="CORRECT ANSWERS"
                value={stats.correctAnswers}
                icon={<CheckCircle2 className="h-6 w-6" />}
              />
            </div>

            <ComparisonGraph percentile={stats.percentile} />
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-[400px] space-y-4 md:space-y-8">
            <SyllabusAnalysis topics={syllabusTopics} />
            <QuestionAnalysis correct={correct} total={total} />
          </div>
        </div>
      </div>

      <Dialog open={isUpdateModalOpen} onOpenChange={setIsUpdateModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Update scores</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleUpdateStats} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label>Update your Rank</Label>
                <Input type="number" name="rank" defaultValue={stats.rank} />
              </div>
              <div>
                <Label>Update your Percentile</Label>
                <Input type="number" name="percentile" defaultValue={stats.percentile} />
              </div>
              <div>
                <Label>Update your Current Score (out of 15)</Label>
                <Input type="text" name="score" defaultValue={stats.correctAnswers} />
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={() => setIsUpdateModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-[#1E3A8A] hover:bg-blue-900">
                Save
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}