import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {/* Title */}
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About Me</h1>
        </div>
        {/* Photo Card */}
        
        {/* Introduction */}
        
        {/* Level of Education */}

        {/* Hobbies */}
      </section>
    </DefaultLayout>
  );
}
