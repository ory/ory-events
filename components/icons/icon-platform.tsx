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

type Props = { color: string; height?: number | string };

export default function PlatformLogo({ color, height = 20 }: Props) {
  return (
    <svg height={height} viewBox="0 0 283 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.7471 6.27273C18.5699 6.27273 15.9953 8.83637 15.9953 12C15.9953 15.1636 18.5699 17.7273 21.7471 17.7273C24.9242 17.7273 27.4988 15.1636 27.4988 12C27.4988 8.83637 24.9242 6.27273 21.7471 6.27273ZM21.7471 15.5455C19.7805 15.5455 18.1865 13.9582 18.1865 12C18.1865 10.0418 19.7805 8.45455 21.7471 8.45455C23.7136 8.45455 25.3077 10.0418 25.3077 12C25.3077 13.9582 23.7136 15.5455 21.7471 15.5455Z" fill="#ffffff"/>
<path d="M34.7478 13.2327C36.2423 12.8236 37.3427 11.46 37.3536 9.84546C37.3536 9.83455 37.3536 9.82909 37.3536 9.81818C37.3536 9.80728 37.3536 9.80182 37.3536 9.79091C37.3372 7.84364 35.7496 6.27273 33.7953 6.27273H29.1422V8.33455L30.894 11.1764H29.1477V17.7273H31.3374V13.3582H32.2571L34.9487 17.7273H37.5233L34.7478 13.2327ZM33.8008 11.1818H33.4778L31.7863 8.45455H33.8008C34.5563 8.45455 35.1694 9.06546 35.1694 9.81818C35.1694 10.5709 34.5563 11.1818 33.8008 11.1818Z" fill="#ffffff"/>
<path d="M41.2483 17.7273H38.7832L41.6755 12.0055L38.7832 6.27273H41.2483L42.8971 9.56728L44.5897 6.27273H47L41.2483 17.7273Z" fill="#ffffff"/>
<path d="M5.75175 6.27273C2.57459 6.27273 0 8.83637 0 12C0 15.1636 2.57459 17.7273 5.75175 17.7273C8.92891 17.7273 11.5035 15.1636 11.5035 12C11.5035 8.83637 8.92891 6.27273 5.75175 6.27273Z" fill="#ffffff"/>
<path d="M5.75175 -1.79567e-07L11.5035 2.83636L11.5035 5.29091L5.75175 2.45455L0 5.29091L-1.0775e-07 2.83636L5.75175 -1.79567e-07Z" fill="#ffffff"/>
<path d="M5.75175 24L-2.0896e-06 21.1636L-1.98185e-06 18.7091L5.75175 21.5455L11.5035 18.7091L11.5035 21.1636L5.75175 24Z" fill="#ffffff"/>
    </svg>
  );
}
