"use client";

import React from "react";
import MagicCard from "../ui/magic-card";
import { SectionBadge } from "../ui/section-bade";
import Container from "../global/container";
import { Button } from "../ui/button";
import Link from "next/link";
const CallToAction = () => {
  return (
    <section className="py-4 md:py-8 lg:py-16">

      <div className="max-w-6xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="bg-green-pea p-8 md:p-16 rounded-3xl border border-solid border-green-pea">
            <p className="text-sm font-semibold uppercase text-white">
              Are you ready?
            </p>
            <h2 className="mt-8 text-2xl md:text-4xl font-semibold leading-7 text-white">
              Start your project with us
            </h2>
            <p className="mt-4 text-lg md:text-xl leading-8 text-white/70">
              Build fast, responsive, and scalable web solutions tailored to your business goals.
            </p>
            <Button asChild size="lg" className="w-full md:w-max">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>


          <Container>
            <MagicCard
              particles={true}
              className="flex flex-col items-start w-full bg-primary/[0.08]"
            >
              <div className="bento-card w-full flex-row gap-6">
                <p className="text-sm font-semibold uppercase text-aquamarine">
                  Let's talk
                </p>
                <h2 className="mt-8 text-2xl md:text-4xl font-semibold leading-7 text-white">
                  Talk to us
                </h2>
                <p className="mt-4 text-lg md:text-xl leading-8 text-white/70">
                  Schedule a demo and discuss your project requirements.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 mt-6">
                  <Button asChild size="lg" className="w-full md:w-max">
                    <Link href="/contact">
                      Get in Touch
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="w-full md:w-max">
                    <Link href="/projects">
                      View Our Work
                    </Link>
                  </Button>
                </div>
              </div>
            </MagicCard>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
