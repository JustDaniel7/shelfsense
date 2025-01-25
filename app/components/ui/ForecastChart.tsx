'use client';

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ForecastData {
    labels: string[];
    values: number[];
}

interface ForecastChartProps {
    data: ForecastData;
}

export default function ForecastChart({ data }: ForecastChartProps) {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Forecast Data',
                data: data.values,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Forecast Chart Example',
            },
        },
    };

    return (
        <div className="my-4 max-w-lg mx-auto">
            <Bar data={chartData} options={options} />
        </div>
    );
}
