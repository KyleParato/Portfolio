import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import {Snippet} from "@heroui/snippet";
import { Link } from "@heroui/link";
export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {/* Title */}
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Contact</h1>
        </div>
        {/* Gallery */}
        <div className="flex lg:flex-row flex-col">
          {/* Email Card */}
          <Card className="mx-auto flex max-w items-center p-5 m-5 shadow-xl shadow-orange-300/40">
            <CardHeader>
              <div>
                <h1 className="card-title">Email</h1>
              </div>
            </CardHeader>
            <CardBody>
                <Snippet symbol="" color="undefined">KyleParato@gmail.com</Snippet>
            </CardBody>
          </Card>
          {/* Github Card */}
          <Card className="mx-auto flex max-w items-center p-5 m-5 shadow-xl shadow-orange-300/40">
            <CardHeader>
              <div>
                <h1 className="card-title">GitHub</h1>
              </div>
            </CardHeader>
            <CardBody>
                <Snippet symbol="" color="undefined">KyleParato</Snippet>
            </CardBody>
            <CardFooter>
            <Link size="sm" isExternal showAnchorIcon href="https://github.com/KyleParato">https://github.com/KyleParato</Link>
            </CardFooter>
          </Card>
          {/* LinkedIn Card */}
          <Card className="mx-auto flex max-w items-center p-5 m-5 shadow-xl shadow-orange-300/40">
            <CardHeader>
              <div>
                <h1 className="card-title">LinkedIn</h1>
              </div>
            </CardHeader>
            <CardBody>
                <Snippet symbol="" color="undefined">Kyle Parato</Snippet>
            </CardBody>
            <CardFooter>
            <Link size="sm" isExternal showAnchorIcon href="https://www.linkedin.com/in/kyle-parato-751bb92b7/">https://www.linkedin.com/in/kyle-parato-751bb92b7/</Link>
            </CardFooter>
          </Card>
        </div>
        {/* Contact Form */}
      </section>
    </DefaultLayout>
  );
}
