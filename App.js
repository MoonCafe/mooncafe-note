import { useState } from "react";

export default function PatchnoteSummary() {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState(null);

  const handleSummarize = () => {
    // TODO: 실제 AI 요약 로직 연동 필요
    const exampleSummary = {
      bugFixes: ["정예 던전 입장 시 간헐적 튕김 현상 수정"],
      events: ["봄맞이 출석 이벤트 시작 (4/10~4/24)"],
      improvements: ["형상 도감 필터 기능 추가"],
      classCare: ["워리어: 강타 스킬의 범위 증가 및 피해량 상향"]
    };
    setSummary(exampleSummary);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">달다방의 개인 패치노트 확인</h1>

      <textarea
        className="w-full h-60 p-3 border rounded text-base"
        placeholder="여기에 패치노트를 붙여넣으세요..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleSummarize}
        className="mt-4 px-6 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
      >
        요약하기
      </button>

      {summary && (
        <div className="mt-6 space-y-4">
          <Section title="오류 수정" color="text-red-500" items={summary.bugFixes} />
          <Section title="신규 이벤트" color="text-yellow-600" items={summary.events} />
          <Section title="개선 사항" color="text-green-600" items={summary.improvements} />
          <Section title="클래스 케어" color="text-purple-600" items={summary.classCare} />
        </div>
      )}
    </div>
  );
}

function Section({ title, color, items }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <h2 className={"text-xl font-semibold mb-2 " + color}>{title}</h2>
      <ul className="list-disc list-inside text-gray-800">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
