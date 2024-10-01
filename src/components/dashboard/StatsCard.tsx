import React from "react";

import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { stats } from "@/global/types/types";
import Link from "next/link";

type CardProps = React.ComponentProps<typeof Card>;

export function StatsCard({ className, ...props }: CardProps & stats) {
  return (
    <Card
      className={cn("w-full flex flex-col justify-center", className)}
      {...props}
    >
      <CardHeader>
        <CardTitle ><Link className="hover:underline" href={`${props.buttonUrl}`}>{props.cardHeader}</Link></CardTitle>
        <CardDescription>{props.cardContent}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4"></CardContent>
    </Card>
  );
}
