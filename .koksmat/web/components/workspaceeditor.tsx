/**
 * v0 by Vercel.
 * @see https://v0.dev/t/x16zvrc3lc3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState, MouseEvent, ChangeEvent } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Rectangle {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
  isHighlighted: boolean;
  isSelected: boolean;
}

export default function Component() {
  const [rectangles, setRectangles] = useState<Rectangle[]>([
    {
      id: 1,
      x: 100,
      y: 100,
      width: 200,
      height: 150,
      text: "New Desk",
      isHighlighted: false,
      isSelected: true,
    },
    {
      id: 2,
      x: 400,
      y: 200,
      width: 150,
      height: 100,
      text: "",
      isHighlighted: false,
      isSelected: false,
    },
    {
      id: 3,
      x: 300,
      y: 400,
      width: 180,
      height: 120,
      text: "",
      isHighlighted: false,
      isSelected: false,
    },
  ]);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedRectangle, setDraggedRectangle] = useState<Rectangle | null>(
    null
  );
  const [resizedRectangle, setResizedRectangle] = useState<Rectangle | null>(
    null
  );
  const [resizeDirection, setResizeDirection] = useState<string | null>(null);
  const [selectedRectangle, setSelectedRectangle] = useState<Rectangle | null>(
    rectangles[0]
  );
  const [isPropertiesPanelOpen, setIsPropertiesPanelOpen] = useState(false);

  const handleMouseDown = (event: MouseEvent, rectangle: Rectangle) => {
    if ((event.target as HTMLElement).closest(".resize-handle")) {
      setResizedRectangle(rectangle);
      setResizeDirection((event.target as HTMLElement).dataset.direction!);
    } else {
      setIsDragging(true);
      setDraggedRectangle(rectangle);
      setSelectedRectangle(rectangle);
      event.stopPropagation();
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging && draggedRectangle) {
      setRectangles((prevRectangles) =>
        prevRectangles.map((rect) =>
          rect.id === draggedRectangle.id
            ? {
                ...rect,
                x: event.clientX - draggedRectangle.width / 2,
                y: event.clientY - draggedRectangle.height / 2,
              }
            : rect
        )
      );
    } else if (resizedRectangle) {
      setRectangles((prevRectangles) =>
        prevRectangles.map((rect) =>
          rect.id === resizedRectangle.id
            ? {
                ...rect,
                width:
                  resizeDirection === "right" ||
                  resizeDirection === "bottomRight"
                    ? event.clientX - rect.x
                    : rect.width - (event.clientX - rect.x),
                height:
                  resizeDirection === "bottom" ||
                  resizeDirection === "bottomRight"
                    ? event.clientY - rect.y
                    : rect.height - (event.clientY - rect.y),
              }
            : rect
        )
      );
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggedRectangle(null);
    setResizedRectangle(null);
    setResizeDirection(null);
  };

  const handleTextChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    rectangle: Rectangle
  ) => {
    setRectangles((prevRectangles) =>
      prevRectangles.map((rect) =>
        rect.id === rectangle.id ? { ...rect, text: event.target.value } : rect
      )
    );
  };

  const handleUndo = () => {};
  const handleRedo = () => {};
  const handleSave = () => {
    localStorage.setItem("rectangles", JSON.stringify(rectangles));
  };

  const handleLoad = () => {
    const savedRectangles = JSON.parse(
      localStorage.getItem("rectangles") || "[]"
    );
    if (savedRectangles) {
      setRectangles(savedRectangles);
    }
  };

  const handleRectangleClick = (rectangle: Rectangle) => {
    setSelectedRectangle(rectangle);
    setRectangles((prevRectangles) =>
      prevRectangles.map((rect) =>
        rect.id === rectangle.id
          ? { ...rect, isSelected: true }
          : { ...rect, isSelected: false }
      )
    );
  };

  const handleOutsideClick = () => {
    setSelectedRectangle(null);
    setRectangles((prevRectangles) =>
      prevRectangles.map((rect) => ({ ...rect, isSelected: false }))
    );
  };

  const togglePropertiesPanel = () => {
    setIsPropertiesPanelOpen((prevState) => !prevState);
  };

  return (
    <div
      className="relative w-full h-[500px] overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onClick={handleOutsideClick}
    >
      <img
        src="/officespace.jpeg"
        alt="Background Image"
        width={800}
        height={500}
        className="w-full h-full object-cover"
      />
      {rectangles.map((rectangle) => (
        <div
          key={rectangle.id}
          className={`absolute bg-white/50 border-2 rounded-md p-2 ${
            rectangle.isSelected ? "border-primary" : "border-transparent"
          }`}
          style={{
            left: rectangle.x,
            top: rectangle.y,
            width: rectangle.width,
            height: rectangle.height,
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseDown={(event) => handleMouseDown(event, rectangle)}
          onClick={() => handleRectangleClick(rectangle)}
        >
          <div className="relative w-full h-full">
            <Textarea
              value={rectangle.text}
              onChange={(event) => handleTextChange(event, rectangle)}
              className="w-full h-full resize-none border-none focus:outline-none"
            />
            {rectangle.isSelected && (
              <>
                <div
                  className="absolute top-0 left-0 w-3 h-3 bg-primary rounded-tl resize-handle"
                  data-direction="topLeft"
                />
                <div
                  className="absolute top-0 right-0 w-3 h-3 bg-primary rounded-tr resize-handle"
                  data-direction="topRight"
                />
                <div
                  className="absolute bottom-0 left-0 w-3 h-3 bg-primary rounded-bl resize-handle"
                  data-direction="bottomLeft"
                />
                <div
                  className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-br resize-handle"
                  data-direction="bottomRight"
                />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-3 bg-primary rounded-md drag-handle" />
              </>
            )}
          </div>
        </div>
      ))}
      <div className="absolute top-0 left-0 w-full bg-background/80 p-2 flex justify-between items-center">
        <div className="flex gap-2">
          <Button variant="ghost" onClick={handleUndo}>
            <UndoIcon className="w-5 h-5" />
            <span className="sr-only">Undo</span>
          </Button>
          <Button variant="ghost" onClick={handleRedo}>
            <RedoIcon className="w-5 h-5" />
            <span className="sr-only">Redo</span>
          </Button>
          <Button variant="ghost" onClick={handleSave}>
            <SaveIcon className="w-5 h-5" />
            <span className="sr-only">Save</span>
          </Button>
          <Button variant="ghost" onClick={handleLoad}>
            <LoaderIcon className="w-5 h-5" />
            <span className="sr-only">Load</span>
          </Button>
        </div>
        <Button variant="ghost" onClick={togglePropertiesPanel}>
          <TablePropertiesIcon className="w-5 h-5" />
          <span className="sr-only">Properties</span>
        </Button>
      </div>
      <Collapsible
        open={isPropertiesPanelOpen}
        onOpenChange={setIsPropertiesPanelOpen}
        className="absolute bottom-0 left-0 w-full bg-background/80 p-4"
      >
        <CollapsibleTrigger className="flex justify-between items-center">
          <span>Properties</span>
          <ViewIcon className="w-4 h-4" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          {selectedRectangle && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="text" className="mb-2">
                  Text
                </Label>
                <Input
                  id="text"
                  value={selectedRectangle.text}
                  onChange={(event) =>
                    handleTextChange(event, selectedRectangle)
                  }
                />
              </div>
              <div>
                <Label htmlFor="width" className="mb-2">
                  Width
                </Label>
                <Input
                  id="width"
                  type="number"
                  value={selectedRectangle.width}
                  onChange={(event) =>
                    setRectangles((prevRectangles) =>
                      prevRectangles.map((rect) =>
                        rect.id === selectedRectangle.id
                          ? { ...rect, width: parseInt(event.target.value) }
                          : rect
                      )
                    )
                  }
                />
              </div>
              <div>
                <Label htmlFor="height" className="mb-2">
                  Height
                </Label>
                <Input
                  id="height"
                  type="number"
                  value={selectedRectangle.height}
                  onChange={(event) =>
                    setRectangles((prevRectangles) =>
                      prevRectangles.map((rect) =>
                        rect.id === selectedRectangle.id
                          ? { ...rect, height: parseInt(event.target.value) }
                          : rect
                      )
                    )
                  }
                />
              </div>
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

function ChevronUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

function LoaderIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  );
}

function RedoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 7v6h-6" />
      <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
    </svg>
  );
}

function SaveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
      <path d="M7 3v4a1 1 0 0 0 1 1h7" />
    </svg>
  );
}

function TablePropertiesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3v18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M21 9H3" />
      <path d="M21 15H3" />
    </svg>
  );
}

function UndoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7v6h6" />
      <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
    </svg>
  );
}

function ViewIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  );
}
