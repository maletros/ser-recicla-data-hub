
import React from "react";
import {
  LineChart,
  Line,
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

interface EvolutionData {
  data: string;
  quantidade: number;
  tipo_residuo: string;
}

interface EvolutionChartProps {
  data: EvolutionData[];
}

export function EvolutionChart({ data }: EvolutionChartProps) {
  return (
    <Card className="col-span-12 lg:col-span-8">
      <CardHeader>
        <CardTitle>Evolução Semanal</CardTitle>
      </CardHeader>
      <CardContent className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="data" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="quantidade" stroke="#2563eb" name="Quantidade (kg)" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
