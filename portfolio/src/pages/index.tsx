import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import {Card, CardBody, CardFooter, CardHeader} from "@heroui/card";
import {Divider} from "@heroui/divider";
import {Image} from "@heroui/image"
import Profile from "../img/Profile.JPG"

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {/* Title */}
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About Me</h1>
        </div>
        {/* Photo Card */}
        <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardBody>
            <Image className="max-w-50vw"
            removeWrapper
            src={Profile}
            alt="Me"
            
            />
          </CardBody>
        </Card>
        
        <div className="grid grid-row-3 gap-2">
        {/* Introduction */}
        <Card>
        <CardHeader>
            <h1>Kyle Parato</h1>
        </CardHeader>
          <CardBody>
            <p className="text-sm font-light">Hello, my name is Kyle. </p>
          </CardBody>
        </Card>
        {/* Level of Education */}
        <Card>
          <CardHeader>
            <h1>Education</h1>
          </CardHeader>
          <CardBody>
            <p className="text-xl text-clip">California State University, Fullerton</p>
            <p className="text-xs font-light">May 2025</p>
          </CardBody>
        </Card>
        
        {/* Hobbies */}
        <Card>
          <CardHeader>
            <h1>Hobbies</h1>
          </CardHeader>
          <CardBody>
            <p className="font-light">Photography, Astorphotography, Weightlifting, Traveling</p>
          </CardBody>
        </Card>
        </div>

        </div>
      </section>
      
      {/* <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section> */}
    </DefaultLayout>
  );
}
