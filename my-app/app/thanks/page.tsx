import Link from "next/link";

export default function Thanks() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-semibold">送信ありがとうございます</h1>
      <Link href="/" className="text-blue-600 hover:underline">
        トップへ戻る
      </Link>
    </main>
  );
}
