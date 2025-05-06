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
import Profile from "../img/image0.jpg"

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {/* Title */}
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About Me</h1>
        </div>
        {/* Photo Card */}
        <div className="">
        <Card>
          <CardBody>
            <h1>Kyle Parato</h1>
          </CardBody>
          <CardBody>
            <Image className="object-scale-down"
            src={Profile}
            alt="Me"
            />

          </CardBody>
        </Card>
        </div>
        {/* Introduction */}
        
        {/* Level of Education */}
        <Card>
          <CardHeader>
            <h1>Education</h1>
          </CardHeader>
          <CardBody>
            <Divider />
            <div>California State Universty, Fullerton</div>
            <Divider orientation="vertical" />
            <div> Batchelors</div>
          </CardBody>
        </Card>
        {/* Hobbies */}
        <Card>
          <CardHeader>
            <h1>Photography</h1>
          </CardHeader>
        </Card>
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
