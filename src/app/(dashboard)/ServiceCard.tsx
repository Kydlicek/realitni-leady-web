import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardWithFormProps {
  title: string;
  description: string;
  video: string;
  btn_text: string;
}

export function CardWithForm({
  title,
  description,
  video,
  btn_text,
}: CardWithFormProps) {
  return (
    <Card className="w-full h-max ">
      <CardHeader className=" pb-0 mb-3 min-h-16 xl:min-h-32 2xl:min-h-18 ">
        <CardTitle className="lg:text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <video controls src={video} width="100%" />
      </CardContent>
      <CardFooter className="pb-6">
        <Button className="w-full">{btn_text}</Button>
      </CardFooter>
    </Card>
  );
}
