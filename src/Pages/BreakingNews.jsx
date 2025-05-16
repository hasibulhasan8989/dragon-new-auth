import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="bg-[#F3F3F3] py-4 px-4 flex items-center mt-8
     ">
      <div className=" max-w-[90px] bg-[#D72050]">
        <p className="py-3 px-5 text-white font-semibold">Latest</p>
      </div>
      <Marquee speed={80} pauseOnClick={true} style={{cursor:'pointer', color:'#FE5D26',opacity:1,}}>
        <p className="mr-12">
           ব্রেকিং নিউজ: পেঁয়াজ কাঁদালো না আজ, নিজেই কাঁদছে!
        </p>
        <p className="mr-12">
           জরুরি সংবাদ: কুমির কাঁদছে প্রেমে পড়ে গেছে হাঁসের!
        </p>
        <p className="mr-12"> চমকপ্রদ: ইন্টারনেট গেলো অফলাইনে, সবাই এখন লাইভ!</p>
        <p className="mr-12"> দুঃসংবাদ নয় – আজও বৃষ্টির নামে ধোঁকা দিলো আকাশ!</p>
        <p className="mr-12"> নাচতে না জানলে দোষ বাইরের গানের: বলল এক বিড়াল!</p>
        <p className="mr-12"> অবাক কাণ্ড: আলু বলেছে “আমি ভাতের রাজা হতে চাই!”</p>
        <p className="mr-12">
           এবার জলের দাম বাড়লো, কারণ পানি নিজেকে মিনারেল ভাবছে!
        </p>
        <p className="mr-12">
           চায়ের কাপের প্রতিবাদ: “আমি শুধু সকালেই নয়, সারাদিন চাই!”
        </p>
        <p className="mr-12">
           আজ সকালেই হাঁসের সাথে দৌড় প্রতিযোগিতায় হারলো এক হাঁসফড়িং!
        </p>
        <p className="mr-12"> বিয়ে না করেই শশুরবাড়ি গেছে বর! মামলা ভাবীর!</p>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
