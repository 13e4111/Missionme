import { useState } from "react";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-purple-400 drop-shadow-lg">
        ภารกิจพิชิตฉัน
      </h1>

      {!started ? (
        <>
          <p className="text-lg md:text-xl mb-4 max-w-xl text-center">
            ข้าเฝ้ารอเจ้านานนัก... ผู้กล้าแห่งตนเอง บัดนี้ถึงเวลาที่เจ้าจะเริ่มต้นภารกิจอันยิ่งใหญ่เพื่อพิชิตตัวตนของตนเองในโลกแห่งความมืดมิดนี้...
          </p>
          <button onClick={() => setStarted(true)} className="bg-purple-600 hover:bg-purple-800 text-white text-lg px-6 py-3 rounded-2xl shadow-md">
            เริ่มภารกิจ
          </button>
        </>
      ) : (
        <div className="w-full max-w-xl bg-gray-900 border-purple-700 border shadow-xl mt-6 p-6 space-y-4 rounded-xl">
          <p className="text-lg">
            [AI ผู้ช่วย]: ยินดีต้อนรับสู่โลกแห่งบททดสอบ เจ้ามีสิ่งใดในใจที่อยากเอาชนะก่อนเป็นอันดับแรก?
          </p>
        </div>
      )}
    </div>
  );
}
