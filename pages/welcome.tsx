/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { GetStaticProps } from 'next';

import Page from '@components/page';
import Layout from '@components/layout';
import Header from '@components/header';
import ConfContainer from '@components/conf-container';
import Textbox from '@components/textbox';

import { getAllStages } from '@lib/cms-api';
import { Stage } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  allStages: Stage[];
};

export default function WelcomePage({ allStages }: Props) {
  const meta = {
    title: 'Ory Summit 2022 - Welcome'
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Welcome to Ory Summit 2022" />
        <ConfContainer>
          <Textbox>
            <div className="textbox">
              <p>
                Ory Summit is a global, free and hybrid conference around cloud identity
                infrastructure focused on but not limited to authentication, authorization, access
                control and security for the whole Ory Community - users, developers, maintainers,
                contributors, customers, and partners.
              </p>
              <h2>Topics of interest</h2>
              <p>
                The sessions will provide various levels of learning and deep-dive technical topics
                covering:
              </p>
              <ul>
                <li>
                  <strong>Ory implementation -</strong> tell us about how you implemented Ory
                  software into your application/project
                </li>
                <li>
                  <strong>Ecosystem & Integration -</strong>tell us how you're using Ory with third
                  party solutions
                </li>
                <li>
                  <strong>Community Talks -</strong> tell us about your experiences being part of
                  the Ory Community
                </li>
                <li>
                  <strong>Teams & Workflow -</strong> tell us how Ory is making your software teams
                  better and more effective with shipping code and features
                </li>
                <li>
                  <strong>Concept Talks -</strong> tell us more about a topic, such as authorization
                  & authentication, open source maintainership, supply chain, JWT or cookies,
                  multi-factor authentication, resilient and scalable architecture, backend & data
                  security, business & innovation, other related topics. Don't hesitate to submit
                  your abstract!
                </li>
              </ul>
              <div className="quote">
                <h2>Present at the Ory Summit</h2>
                <h4>
                  To learn more and submit your abstract, please click on the following link:{' '}
                  <p>
                    {' '}
                    <a href="https://forms.gle/UA1ey1Uw8j3jxaQw6" rel="nofollow">
                      Ory Summit 2022 Call For Papers
                    </a>
                  </p>
                </h4>
              </div>
              <p>
                For any inquiries regarding the programm, please contact:{' '}
                <a href="mailto:summit@ory.sh">summit@ory.sh</a>
              </p>
              <p>
                For all general inquiries, please contact:{' '}
                <a href="mailto:office@ory.sh">office@ory.sh</a>
              </p>
              <h2>Attend the Ory Summit</h2>
              <ul>
                <li>Code, code, code and more code. Get examples and answers from the experts.</li>
                <li>Learn about cloud security best practices.</li>
                <li>Get inspired by tech pioneers and industry leaders.</li>
                <li>Level up your skills by engaging in tech talks delivered by proven experts.</li>
                <li>
                  Network & meet with like-minded peers from around the world and share your
                  experiences.
                </li>
                <li>
                  Expand your network via virtual events: find new partners, clients, employers,
                  products and solutions.
                </li>
              </ul>
            </div>
          </Textbox>
        </ConfContainer>
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allStages = await getAllStages();

  return {
    props: {
      allStages
    },
    revalidate: 60
  };
};