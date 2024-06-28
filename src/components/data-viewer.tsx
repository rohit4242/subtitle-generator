"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

type Props = {
  data: any;
};

export default function DataViewer({ data }: Props) {
  console.log(data)
  return (
    <section className="flex flex-col gap-3 items-center w-full h-auto max-h-[85vh] overflow-scroll">
      <Tabs defaultValue="timestamps" className="w-full h-full">
        <div className="w-full justify-between flex items-center">
          <TabsList>
            <TabsTrigger value="text">Text</TabsTrigger>
            <TabsTrigger value="timestamps">Timestamps</TabsTrigger>
            <TabsTrigger value="json">JSON</TabsTrigger>
          </TabsList>
          <div className="bg-gray-100 text-sm px-2 rounded-lg border-gray-300 border text-gray-600">
            <span className="sm:inline hidden">
              Finished on a <span className="font-medium">NVIDIA A10G</span> in
              <span className="font-medium"> {data.elapsed_time?.toFixed(2)}s</span>
            </span>
          </div>
        </div>
        <TabsContent
          className="bg-gray-100 px-5 py-3 rounded-lg border-gray-300 border text-gray-600 font-mono h-fit "
          value="text"
        >
          {data.transcription?.text}
        </TabsContent>
        <TabsContent
          className="bg-gray-100 px-5 py-3 rounded-lg border-gray-300 border text-gray-600 font-mono h-fit"
          value="timestamps"
        >
          {data.transcription.chunks.map((chunk: any, index: number) => (
            <div className="border-b py-3" key={index}>
              <p>{chunk.text}</p>
              <p className="text-sm opacity-70">
                {chunk.timestamp[0]}s - {chunk.timestamp[1]}s
              </p>
            </div>
          ))}
        </TabsContent>
        <TabsContent
          className="bg-gray-100 px-5 py-3 rounded-lg border-gray-300 border text-gray-600 font-mono h-fit max-h[90%] overflow-scroll"
          value="json"
        >
          <pre>{JSON.stringify(data.json_output.chunks, null, 2)}</pre>
        </TabsContent>
      </Tabs>
    </section>
  );
}
