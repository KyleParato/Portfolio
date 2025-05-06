import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {Card, CardBody, CardFooter, CardHeader} from "@heroui/card";
import { Divider } from "@heroui/divider";
import {Link} from "@heroui/link"

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 max-w-9/10">
        <div className="inline-block max-w-9/10 text-center justify-center">
          <h1 className={title()}>Projects</h1>
          <div className="snap-y snap-mandatory overflow-y-scroll scroll-smooth max-h-[75vw]">
        
        {/* Project */}
        <Card className="mx-auto flex max-w items-center p-5 m-5 shadow-xl shadow-orange-300/40 snap-start">
              <CardHeader>
                <div>
                  <h1 className="card-title">Incoming Work Order Managment System - Edwards Lifesciences</h1>
                  <p className="card-date">May 2025</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                  <p className="text-sm">Desc</p>
                  <img src="/src/img/IMG_0027.JPG"></img>
              </CardBody>
              <Divider/>
              <CardFooter>
                <Link className="overflow-hidden text-ellipsis" isExternal showAnchorIcon href="https://github.com/KyleParato/491">Edwards Lifesciences </Link>
              </CardFooter>
            </Card>
        
        {/* Project */}
        <Card className="mx-auto flex max-w items-center p-5 m-5 shadow-xl shadow-orange-300/40 snap-start">
              <CardHeader>
                <div>
                  <h1 className="card-title">Real Time Cloud Document Collaboration</h1>
                  <p className="card-date">May 2024</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                  <p className="text-sm">Desc</p>
                  <img src="/src/img/IMG_0027.JPG"></img>
              </CardBody>
              <Divider/>
              <CardFooter>
                <Link isExternal showAnchorIcon href="https://github.com/KyleParato/SFT">https://github.com/KyleParato/SFT</Link>
              </CardFooter>
            </Card>
        
        {/* Project */}
        <Card className="mx-auto flex max-w items-center p-5 m-5 shadow-xl shadow-orange-300/40 snap-start">
              <CardHeader>
                <div>
                  <h1 className="card-title">Chess AI - Alpha Beta Pruning</h1>
                  <p className="card-date">December 2024</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                  <p className="text-sm">Desc</p>
              </CardBody>
              <Divider/>
              <CardFooter>
                <Link isExternal showAnchorIcon href="https://github.com/KyleParato/481Final">https://github.com/KyleParato/481Final</Link>
              </CardFooter>
            </Card>
          
          {/* Project */}
            <Card className="mx-auto flex max-w items-center p-5 m-5 shadow-xl shadow-orange-300/40 snap-start">
              <CardHeader>
                <div>
                  <h1 className="card-title">SFT - Simple Fitness Tracker</h1>
                  <p className="card-date">May 2024</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                  <p className="text-sm">Desc</p>
              </CardBody>
              <Divider/>
              <CardFooter>
                <Link isExternal showAnchorIcon href="https://github.com/KyleParato/SFT">https://github.com/KyleParato/SFT</Link>
              </CardFooter>
            </Card>
        
        {/* Project */}
        <Card className="mx-auto flex max-w items-center p-5 m-5 shadow-xl shadow-orange-300/40 snap-start">
              <CardHeader>
                <div>
                  <h1 className="card-title">Basic FTP Server</h1>
                  <p className="card-date">May 2024</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                  <p className="text-sm">Desc</p>
              </CardBody>
              <Divider/>
              <CardFooter>
                <Link isExternal showAnchorIcon href="https://github.com/KyleParato/471_Group_Project">https://github.com/KyleParato/471_Group_Project</Link>
              </CardFooter>
            </Card>
        
        {/* Project */}
        <Card className="mx-auto flex max-w items-center p-5 m-5 shadow-xl shadow-orange-300/40 snap-start">
              <CardHeader>
                <div>
                  <h1 className="card-title">Basic Compiler</h1>
                  <p className="card-date">May 2023</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                  <p className="text-sm">Desc</p>
              </CardBody>
              <Divider/>
              <CardFooter>
                <Link isExternal showAnchorIcon href="https://github.com/KyleParato/CPSC323_Final">https://github.com/KyleParato/CPSC323_Final</Link>
              </CardFooter>
            </Card>
        </div>
        
        </div>
      </section>
    </DefaultLayout>
  );
}
