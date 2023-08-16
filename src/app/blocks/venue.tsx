import { ArrowButton } from "@/app/components/arrow-button"
import { Container } from "@/app/components/container"
import { Content } from "@/app/components/content"
import { Overline } from "@/app/components/overline"
import { Wrapper } from "@/app/components/wrapper"
import Image from "next/image"
import venueMap from "../../../public/venue-map.webp"

export const Venue = () => (
  <div className="grid h-screen grid-rows-2 xl:grid-cols-2 xl:grid-rows-1">
    {/*
        The image is expected to be white on transparent. In that case, the CSS
        is able to map the white to any given color.
        Due to how it works, we need to distinguish between target colors that are
        lighter than the background and target colors that are darker than the
        background (they require either mapping to black + target color -> lighten
        or white + target color -> darken).
     */}
    <div className="relative w-full border-b border-b-blue-500 dark:border-b-rose-500 xl:col-start-2">
      <div className="h-full w-full mix-blend-darken invert dark:mix-blend-lighten dark:invert-0">
        <Image
          src={venueMap}
          alt=""
          className="h-full w-full bg-black object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-blue-500 mix-blend-multiply invert dark:bg-[#F5538D] dark:invert-0"></div>
      </div>
    </div>

    <div className="flex grow content-end p-6 sm:p-12 md:py-24 lg:p-24 xl:row-start-1">
      <Container className="w-full max-w-[1344px] flex-1">
        <Wrapper className="content-end xl:content-start">
          <Content className="col-span-full flex flex-col gap-y-2 xl:h-[600px] xl:justify-center 2xl:h-[648px]">
            <Overline href="#venue">location</Overline>
            <div className="flex flex-col gap-4 md:gap-6">
              <h2 className="text-4xl font-medium uppercase leading-tight md:text-5xl md:leading-tight">
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
