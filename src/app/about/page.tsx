import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="flex min-h-screen w-full justify-center bg-gray-50">
      <div className="flex w-full max-w-[800px] flex-col rounded-lg">
        <div>
          <h1 className="mb-2 break-words text-2xl font-bold text-gray-900 sm:text-3xl">
            Frontend Engineer
          </h1>
          <p className="mb-4 break-words text-lg text-gray-700 sm:mb-6 sm:text-xl">
            김남선
          </p>

          <div className="mb-6 gap-2 text-gray-600 sm:mb-8 sm:grid-cols-2 sm:gap-4">
            <p className="break-words text-sm sm:text-base">
              <Link
                href="mailto:kimnsunnie@gmail.com"
                className="text-blue-500 hover:underline"
              >
                kimnsunnie@gmail.com
              </Link>
            </p>
            <p className="break-words text-sm sm:text-base">
              <Link
                href="https://github.com/kimnamsun"
                className="text-blue-500 hover:underline"
              >
                Github
              </Link>
            </p>
            <p className="break-words text-sm sm:text-base">
              <Link
                href="https://kimnamsun.github.io"
                className="text-blue-500 hover:underline"
              >
                Blog
              </Link>
            </p>
          </div>

          {/* Summary Section */}
          <h2 className="mb-3 break-words text-xl font-semibold text-gray-900 sm:mb-4 sm:text-2xl">
            About
          </h2>
          <p className="mb-6 break-words text-sm leading-[1.75] text-gray-700 sm:mb-8 sm:text-base sm:leading-[2]">
            문제를 해결하기 위한 효율적인 방법을 고민하며, 기술적 접근에만
            국한되지 않고 다양한 시각에서 접근합니다.
            <br />
            UI/UX에 관심이 많고, 디자인 시스템을 설계하고 구현해본 적이
            있습니다.
            <br />
            기술 속에서 예술을 찾고, 낭만을 꿈꿉니다.
            <br />
            꼼꼼한 계획이 행복한 여정을 그린다고 믿습니다.
          </p>

          {/* Skills Section */}
          <h2 className="mb-3 break-words text-xl font-semibold text-gray-900 sm:mb-4 sm:text-2xl">
            Skills
          </h2>
          <ul className="mb-6 list-inside list-disc space-y-2 text-sm text-gray-700 sm:mb-8 sm:text-base">
            <li className="break-words">
              React, Next.js, Vue.js, JavaScript, TypeScript
            </li>
            <li className="break-words">
              TailwindCSS, Vanila-Extract, Emotion, Styled-Components
            </li>
            <li className="break-words">TanStack Query, Zustand, Recoil</li>
          </ul>

          {/* Experiences Section */}
          <h2 className="mb-3 break-words text-xl font-semibold text-gray-900 sm:mb-4 sm:text-2xl">
            Work Experience
          </h2>
          <div className="mb-6 space-y-8 sm:mb-8">
            {/* Company 1 */}
            <div className="rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                  퓨쳐위즈
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  2021. 08 - 현재
                </p>
              </div>
              <p className="mt-1 text-sm italic text-gray-500">
                두나무 사내 백오피스부터 다양한 금융서비스를 제공하는 두나무
                자회사
              </p>
              <div className="mt-6 space-y-8">
                {/* Project 2 */}
                <div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <Link href="https://upbitcare.com/upto">
                      <h4 className="text-base font-medium text-blue-500 hover:underline sm:text-lg">
                        두나무 투자자보호센터 업투 서비스
                      </h4>
                    </Link>
                    <p className="mt-1 text-sm italic text-gray-500">
                      대학생 서포터즈를 위한 미션 활동 중심의 업투 서비스
                    </p>
                    <p className="mt-1 text-sm text-gray-700">
                      Next.js, TypeScript, TanStack Query, CSS Module
                    </p>
                  </div>
                  <ul className="ml-3 mt-3 list-inside list-disc space-y-2 text-sm text-gray-700 sm:text-base">
                    <li>
                      퍼블릭 페이지와 어드민 페이지의 기능을 설계하고
                      개발했습니다.
                    </li>
                    <li>AWS S3로 안정적인 파일 업로드 기능을 구현했습니다.</li>
                    <li>TanStack Query로 API 캐싱을 최적화했습니다.</li>
                    <li>
                      SSR 적용으로 초기 UI 렌더링 속도를 최적화하고 SEO를
                      개선했습니다.
                    </li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="text-base font-medium text-gray-800 sm:text-lg">
                      Groo : 두나무 전사 그룹웨어 플랫폼
                    </h4>
                    <p className="mt-1 text-sm italic text-gray-500">
                      650명 직원이 사용하는 전사 그룹웨어 플랫폼
                    </p>
                    <p className="mt-1 text-sm text-gray-700">
                      Vue.js, JavaScript, Element UI
                    </p>
                  </div>
                  <ul className="ml-3 mt-3 list-inside list-disc space-y-2 text-sm text-gray-700 sm:text-base">
                    <li>
                      인사, 기안, 결재, 리뷰, 커뮤니티 기능을 개발하고
                      유지보수했습니다.
                    </li>
                    <li>
                      JS 번들 크기를 4.3MB에서 1.16MB로 73% 줄여{" "}
                      <Link
                        href="mailto:kimnsunnie@gmail.com"
                        className="text-blue-500 hover:underline"
                      >
                        성능을 최적화
                      </Link>
                      했습니다.
                    </li>
                    <li>
                      상세정보를 노출하는 Drawer의 불필요한 UX 개선을 제안하고
                      반영했습니다.
                    </li>
                  </ul>
                </div>

                {/* Project 1 */}
                <div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="text-base font-medium text-gray-800 sm:text-lg">
                      Durowa : 두나무 채용 시스템
                    </h4>
                    <p className="mt-1 text-sm italic text-gray-500">
                      두나무와 자회사들의 맞춤 채용 관리 시스템으로, 빠르고
                      손쉬운 채용을 지원하는 백오피스
                    </p>
                    <p className="mt-1 text-sm text-gray-700">
                      Next.js, TypeScript, TanStack Query, Zustand,
                      Vanilla-Extract, And design
                    </p>
                  </div>
                  <ul className="ml-3 mt-3 list-inside list-disc space-y-2 text-sm text-gray-700 sm:text-base">
                    <li>
                      지원자 맞춤 퍼블릭 페이지 설계 및 개발로 채용 프로세스를
                      간소화했습니다.
                    </li>
                    <li>
                      어드민 페이지의 포지션 및 인재풀 관리 핵심 기능을 개발하고
                      유지보수했습니다.
                    </li>
                    <li>
                      <Link
                        href="mailto:kimnsunnie@gmail.com"
                        className="text-blue-500 hover:underline"
                      >
                        Zustand 기반 전역 모달 시스템과 커스텀 훅
                      </Link>
                      으로 코드 재사용성을 높였습니다.
                    </li>
                  </ul>
                </div>

                {/* Project 4 */}
                <div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="break-words text-base font-medium text-gray-800 sm:text-lg">
                      DNA (Dunamu Next AML) : 업비트 자금 세탁방지 서비스
                    </h4>
                    <p className="mt-0.5 text-sm italic text-gray-500">
                      업비트 사용자를 위한 자금 세탁 방지 백오피스
                    </p>
                    <p className="mt-1 text-sm text-gray-700">
                      <span className="font-medium">기술 스택: </span>Next.js,
                      TypeScript, Styled-Components, TanStack Query, Zustand
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    {/* 문제 정의 */}
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <h5 className="text-sm font-medium text-gray-900 sm:text-base">
                        문제 정의
                      </h5>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-700 sm:text-base">
                        <li className="break-words">
                          jQuery와 Vanilla JS 기반 레거시 프로젝트로 유지보수와
                          확장이 어려움.
                        </li>
                        <li className="break-words">
                          iframe으로 렌더링되는 React 컴포넌트로 인해 성능 저하.
                        </li>
                        <li className="break-words">
                          타입 정의 부족으로 오류 발생 가능성 높음.
                        </li>
                      </ul>
                    </div>

                    {/* 해결 방안 */}
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <h5 className="text-sm font-medium text-gray-900 sm:text-base">
                        해결 방안
                      </h5>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-700 sm:text-base">
                        <li className="break-words">
                          Next.js로 마이그레이션하며 iframe 제거 및 구조 개선.
                        </li>
                        <li className="break-words">
                          TypeScript와 OpenAPI Generator로 타입 안전성과 API
                          연동 강화.
                        </li>
                        <li className="break-words">
                          React Hook Form, Yup, TanStack Query로 데이터 관리와
                          캐싱 최적화.
                        </li>
                        <li className="break-words">
                          Styled-Components로 디자인 시스템 구축.
                        </li>
                      </ul>
                    </div>

                    {/* 성과 */}
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <h5 className="text-sm font-medium text-gray-900 sm:text-base">
                        성과
                      </h5>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-700 sm:text-base">
                        <li className="break-words">
                          lodash-es로 번들 크기 243.57KB → 193.5KB, 성능 20.55%
                          개선.
                        </li>
                        <li className="break-words">
                          유지보수성과 코드 가독성 대폭 향상.
                        </li>
                        <li className="break-words">
                          개발 속도와 협업 효율성 증가, 런타임 오류 감소.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="break-words text-base font-medium text-gray-800 sm:text-lg">
                      DNA (Dunamu Next AML) : 업비트 자금 세탁방지 서비스
                    </h4>
                    <p className="mt-0.5 text-sm italic text-gray-500">
                      업비트 사용자를 위한 자금 세탁 방지 백오피스
                    </p>
                    <p className="mt-1 text-sm text-gray-700">
                      <span className="font-medium">기술 스택: </span>Next.js,
                      TypeScript, Styled-Components, TanStack Query, Zustand
                    </p>
                  </div>
                  <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-gray-700 sm:text-base">
                    <li>
                      jQuery 레거시 프로젝트를 신규 프로젝트로
                      마이그레이션했습니다.
                    </li>
                    <li>
                      lodash-es로 번들 크기를 243.57KB에서 193.5KB로 줄여{" "}
                      <Link
                        href="mailto:kimnsunnie@gmail.com"
                        className="text-blue-500 hover:underline"
                      >
                        성능을 20.55% 개선
                      </Link>
                      했습니다.
                    </li>
                    <li>
                      React Hook Form과 Yup으로 25개 필터를 효율적으로
                      관리했습니다.
                    </li>
                    <li>TanStack Query로 API 캐싱을 최적화했습니다.</li>
                    <li>
                      디자인 시스템으로 UI 일관성과 협업 효율성을 높였습니다。
                    </li>
                  </ul>

                  {/* 문제 정의, 해결 방안, 성과 */}
                  <div className="mt-6 space-y-6">
                    {/* 문제 정의 */}
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <h5 className="text-sm font-medium text-gray-900 sm:text-base">
                        문제 정의
                      </h5>
                      <ul className="mt-2 list-inside list-disc space-y-2 text-sm text-gray-700 sm:text-base">
                        <li className="break-words">
                          기존 프로젝트는 jQuery와 Vanilla JS로 구성되어
                          있었으며, React 컴포넌트는 iframe을 통해 렌더링되는
                          방식이었습니다.
                        </li>
                        <li className="break-words">
                          유지보수가 어렵고, 코드베이스가 복잡해지는 문제가
                          있었습니다.
                        </li>
                        <li className="break-words">
                          명확한 타입 정의 없이 개발이 진행되어 타입 오류 발생
                          가능성이 높았고, 프론트엔드와 백엔드 간의 데이터 구조
                          일관성을 유지하기 어려웠습니다。
                        </li>
                      </ul>
                    </div>

                    {/* 해결 방안 */}
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <h5 className="text-sm font-medium text-gray-900 sm:text-base">
                        해결 방안
                      </h5>
                      <ul className="mt-2 list-inside list-disc space-y-2 text-sm text-gray-700 sm:text-base">
                        <li className="break-words">
                          레거시 코드의 복잡성을 해결하기 위해 기존 프로젝트를
                          새로운 프로젝트로 마이그레이션했습니다.
                        </li>
                        <li className="break-words">
                          iframe 기반의 React 컴포넌트 렌더링 방식을 제거하고,
                          Next.js를 도입했습니다.
                        </li>
                        <li className="break-words">
                          TypeScript를 도입하여 코드의 안정성을 높이고, 타입
                          안전성을 확보했습니다.
                        </li>
                        <li className="break-words">
                          OpenAPI Generator를 활용해 Swagger에서 자동으로
                          TypeScript 타입을 생성하여 백엔드와 데이터 타입을
                          공유했습니다.
                        </li>
                      </ul>
                    </div>

                    {/* 성과 */}
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <h5 className="text-sm font-medium text-gray-900 sm:text-base">
                        성과
                      </h5>
                      <ul className="mt-2 list-inside list-disc space-y-2 text-sm text-gray-700 sm:text-base">
                        <li className="break-words">
                          유지보수성이 대폭 향상되었으며, 코드의 일관성과
                          확장성이 강화되었습니다.
                        </li>
                        <li className="break-words">
                          iframe을 제거함으로써 성능 최적화 효과를 얻었고, 개발
                          속도와 협업 효율성이 증가했습니다.
                        </li>
                        <li className="break-words">
                          TypeScript 도입으로 런타임 오류를 줄이고, 코드의
                          가독성과 안정성을 높였습니다.
                        </li>
                        <li className="break-words">
                          OpenAPI Generator를 활용한 타입 공유로 API 변경 시
                          싱크를 맞추는 과정이 수월해졌습니다.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Project 5 */}
                <div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="text-base font-medium text-gray-800 sm:text-lg">
                      Ditto : 두나무 전사 통합 백오피스 플랫폼
                    </h4>
                    <p className="mt-1 text-sm italic text-gray-500">
                      SDUI 기반으로 사용자가 페이지를 구성하는 백오피스
                    </p>
                    <p className="mt-1 text-sm text-gray-700">
                      Next.js, TypeScript, Styled-Components, TanStack Query,
                      Zustand
                    </p>
                  </div>
                  <ul className="ml-3 mt-3 list-inside list-disc space-y-2 text-sm text-gray-700 sm:text-base">
                    <li>
                      SDUI 아키텍처를 통해 사용자가 직접 어드민 페이지를 구성할
                      수 있도록 지원했습니다.
                    </li>
                    <li>
                      디자인 시스템으로 UI 일관성과 생산성을 강화했습니다.
                    </li>
                    <br />
                    <li>
                      <b>문제</b> : 개발자 없이 기획자가 스스로 화면을 구성하는
                      백오피스를 만들고싶다는 니즈가 있었습니다.
                    </li>
                    <li>
                      <b>해결</b> : Server Driven UI 방식에 적합한 동적 UI
                      구조를 정의하고, JSON 기반의 데이터 모델링을 통해
                      아키텍처를 구축했습니다.
                    </li>
                    <li>
                      <b>성과</b> : 개발자가 아닌 다양한 직군의 유저가 반복되는
                      수정 사항을 코드 변경 없이 화면을 구성하도록 개발했습니다.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Other Experience */}
          <h2 className="mb-3 break-words text-xl font-semibold text-gray-900 sm:mb-4 sm:text-2xl">
            Other Experience
          </h2>
          <ul className="mb-6 list-inside list-disc text-sm text-gray-700 sm:mb-8 sm:text-base">
            <li className="break-words">
              <Link
                href="https://github.com/hoseungme/opensources/blob/main/ko.md"
                className="text-blue-600 hover:underline"
              >
                오픈소스 프로젝트
              </Link>
              개발 및 공개
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
