
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ComparativeStats {
  nome: string;
  aluminio: number;
  pet: number;
  vidro: number;
  pano: number;
}

interface ComparativeChartProps {
  data: ComparativeStats[];
  title: string;
}

export function ComparativeChart({ data, title }: ComparativeChartProps) {
  return (
    <Card className="col-span-12 lg:col-span-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nome" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="aluminio" name="Alumínio" fill="#2563eb" />
            <Bar dataKey="pet" name="PET" fill="#16a34a" />
            <Bar dataKey="vidro" name="Vidro" fill="#9333ea" />
            <Bar dataKey="pano" name="Pano" fill="#ea580c" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
