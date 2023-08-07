import { ArrowButton } from "@/app/components/arrow-button"
import { Container } from "@/app/components/container"
import { Content } from "@/app/components/content"
import { Overline } from "@/app/components/overline"
import { Wrapper } from "@/app/components/wrapper"
import Image from "next/image"
import mapImage from "../../assets/map.webp"

export const Venue = () => (
  <div className="flex min-h-screen flex-col">
    <div className="relative aspect-square w-full border-b border-b-blue-500 dark:border-b-rose-500">
      <div className="h-full w-full mix-blend-darken invert dark:mix-blend-lighten dark:invert-0">
        <Image
          src={mapImage}
          alt=""
          className="h-full w-full bg-black object-cover object-center"
        />
        <div className="absolute inset-0 bg-blue-500 mix-blend-multiply invert dark:bg-[#F5538D] dark:invert-0"></div>
      </div>
    </div>
    <div className="flex grow content-end p-6">
      <Container className="w-full max-w-[1344px] flex-1">
        <Wrapper className="content-end">
          <Content className="col-span-full flex flex-col gap-y-2">
            <Overline href="#venue">location</Overline>
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-medium uppercase leading-tight">
                The venue
              </h2>
              <address className="text-base not-italic leading-tight">
                Ory Corp <br />
                August-Everding-Str 8 <br />
                80346 München <br />
                <br />
                [the summit is on 4th floor] <br />
                &nbsp;
              </address>
            </div>
            <ArrowButton href="https://maps.google.com">
              Get directions
            </ArrowButton>
          </Content>
        </Wrapper>
      </Container>
    </div>
  </div>
)
