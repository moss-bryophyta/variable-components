import { T, Var, Num, Currency, DateTime } from "gt-next";
import { LocaleSelector } from "gt-next";

const user = {
  name: "Elena Rodriguez",
  balance: 12450.75,
  posts: 1847,
  followers: 23591,
  joinDate: new Date("2021-03-15T00:00:00Z"),
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-[family-name:var(--font-geist)] dark:bg-zinc-950">
      <main className="flex w-full max-w-lg flex-col gap-8 px-6 py-16">
        <div className="flex items-center justify-between">
          <T>
            <h1 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Variable Components
            </h1>
          </T>
          <LocaleSelector />
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-lg font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                ER
              </div>
              <div>
                <T>
                  <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    <Var>{user.name}</Var>
                  </p>
                </T>
                <T>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Member since{" "}
                    <DateTime options={{ dateStyle: "long" }}>
                      {user.joinDate}
                    </DateTime>
                  </p>
                </T>
              </div>
            </div>

            <hr className="border-zinc-100 dark:border-zinc-800" />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <T>
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    Posts
                  </p>
                </T>
                <T>
                  <p className="mt-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                    <Num>{user.posts}</Num>
                  </p>
                </T>
              </div>
              <div>
                <T>
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    Followers
                  </p>
                </T>
                <T>
                  <p className="mt-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                    <Num>{user.followers}</Num>
                  </p>
                </T>
              </div>
            </div>

            <hr className="border-zinc-100 dark:border-zinc-800" />

            <div>
              <T>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Account Balance
                </p>
              </T>
              <T>
                <p className="mt-1 text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
                  <Currency currency="USD">{user.balance}</Currency>
                </p>
              </T>
            </div>

            <hr className="border-zinc-100 dark:border-zinc-800" />

            <T>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <Var>{user.name}</Var> has published <Num>{user.posts}</Num>{" "}
                posts and gained <Num>{user.followers}</Num> followers since
                joining on{" "}
                <DateTime options={{ dateStyle: "medium" }}>
                  {user.joinDate}
                </DateTime>
                . Their current account balance is{" "}
                <Currency currency="USD">{user.balance}</Currency>.
              </p>
            </T>
          </div>
        </div>

        <T>
          <p className="text-center text-xs text-zinc-400 dark:text-zinc-600">
            Switch languages to see how numbers, currencies, and dates adapt to
            each locale.
          </p>
        </T>
      </main>
    </div>
  );
}
