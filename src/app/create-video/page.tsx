import { CardWithForm } from "@/app/(dashboard)/ServiceCard";

export default async function Dashboard() {
  return (
    <main className="m-5 ms:m-10 mt-0 md:mt-0 lg:m-20 lg:mt-0">
      <h1 className="text-3xl font-bold mb-3 pt-3">Choose your style</h1>

      <div className="container flex flex-col md:flex-row max-w-full  py-0 gap-4">
        <CardWithForm
          title="Add Subtitles"
          description="Automatically recognizes speech throughout the video and adds corresponding subtitles."
          video="/service-vid-examples/sub.mp4"
          btn_text="Add subtitles"
        />
        <CardWithForm
          title="Make Story to the Video"
          description="Allows the user to input a text narrative, which is grammatically checked, voiced over, and subtitled into the video."
          video="/service-vid-examples/sub.mp4"
          btn_text="Make Strory"
        />
        <CardWithForm
          title="Make Short Introduction with Context"
          description="Adds a brief, voiced introduction with a subtitles to set the scene at the video’s beginning."
          video="/service-vid-examples/sub.mp4"
          btn_text="Make Introduction"
        />
      </div>
    </main>
  );
}
