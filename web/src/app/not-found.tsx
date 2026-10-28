import Link from "next/link";
import { EmptyState } from "@/components/ui";

export default function NotFound() {
  return (
    <EmptyState icon={<span className="text-3xl">🫥</span>} title="This page doesn't exist" body="The link may be wrong, or the page moved.">
      <Link href="/" className="btn btn-blue h-12 px-6">
        Explore coins
      </Link>
    </EmptyState>
  );
}
