
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CourseStats {
  curso: string;
  total_quantidade: number;
}

interface CourseStatsCardProps {
  data: CourseStats[];
}

export function CourseStatsCard({ data }: CourseStatsCardProps) {
  return (
    <Card className="col-span-12 lg:col-span-4">
      <CardHeader>
        <CardTitle>Entrega por Curso</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {data.map((stat) => (
              <div key={stat.curso} className="flex items-center justify-between">
                <span className="font-medium truncate">{stat.curso}</span>
                <span className="text-sm text-muted-foreground">
                  {stat.total_quantidade.toFixed(2)} kg
                </span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
