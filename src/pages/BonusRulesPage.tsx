import { Card } from "@/components/ui/card";
import { Gift, Target, TrendingUp, Users } from "lucide-react";

export default function BonusRulesPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">বোনাস নিয়মাবলি</h1>
          </div>
          <p className="text-slate-400 mt-2">
            আমাদের সাইটে খেলার জন্য বোনাস এবং টার্নওভার সিস্টেম সম্পর্কে
            সম্পূর্ণ তথ্য
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Bonus Types Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Gift className="w-8 h-8 text-amber-500" />
            বোনাস প্রকার
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Bonus Type 1 */}
            <Card className="p-8 bg-slate-800 border-2 border-slate-700 hover:border-amber-400 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-900 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-amber-400">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">
                    বোনাস ছাড়া খেলা
                  </h3>
                  <p className="text-slate-300 mb-4">
                    যারা বোনাস ছাড়াই খেলতে পছন্দ করেন তাদের জন্য:
                  </p>
                  <div className="bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded">
                    <p className="text-amber-100 font-semibold">
                      প্রথম ডিপোজিটে ১০% বোনাস
                    </p>
                    <p className="text-slate-400 text-sm mt-2">
                      পরবর্তী ডিপোজিটে বোনাস পাওয়া যাবে না
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Bonus Type 2 */}
            <Card className="p-8 bg-slate-800 border-2 border-slate-700 hover:border-orange-400 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-900 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-orange-400">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">
                    প্রতি ডিপোজিটে বোনাস
                  </h3>
                  <p className="text-slate-300 mb-4">
                    যারা প্রতিটি ডিপোজিটে বোনাস নিতে চান তাদের জন্য:
                  </p>
                  <div className="bg-orange-900/30 border-l-4 border-orange-500 p-4 rounded">
                    <p className="text-orange-100 font-semibold">
                      প্রতি ডিপোজিটে ৭% বোনাস
                    </p>
                    <p className="text-slate-400 text-sm mt-2">
                      5× Turnover সিস্টেম প্রযোজ্য
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Turnover System Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Target className="w-8 h-8 text-blue-400" />
            Turnover সিস্টেম বিস্তারিত ব্যাখ্যা
          </h2>

          {/* Example Calculation */}
          <Card className="p-8 bg-slate-800 border-2 border-blue-700 mb-6">
            <h3 className="text-xl font-bold text-white mb-6">
              ডিপোজিট এবং বোনাস উদাহরণ
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg border border-slate-600">
                <span className="text-slate-200 font-semibold">
                  প্লেয়ার ডিপোজিট করলেন:
                </span>
                <span className="text-2xl font-bold text-blue-400">
                  ১০০০ টাকা
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg border border-slate-600">
                <span className="text-slate-200 font-semibold">
                  ৭% বোনাস পাওয়া গেল:
                </span>
                <span className="text-2xl font-bold text-orange-400">
                  ৭০ টাকা
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-linear-to-r from-blue-600 to-indigo-600 rounded-lg">
                <span className="text-white font-semibold">মোট ব্যালেন্স:</span>
                <span className="text-2xl font-bold text-white">১০৭০ টাকা</span>
              </div>
            </div>
          </Card>

          {/* Turnover Rule */}
          <Card className="p-8 bg-slate-800 border-2 border-slate-700 mb-6">
            <h3 className="text-xl font-bold text-white mb-4">
              5× Turnover নিয়ম
            </h3>
            <p className="text-slate-300 mb-6">
              5× Turnover মানে, প্লেয়ারকে ডিপোজিট + বোনাসের মোট ৫ গুণ খেলে
              তারপরই উইথড্র করতে পারবে।
            </p>

            <div className="bg-slate-700 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-slate-200 mb-2">
                <span className="font-semibold">উদাহরণ:</span> (১০০০ + ৭০) × ৫ ={" "}
                <span className="text-2xl font-bold text-blue-400">
                  ৫,৩৫০ টাকা
                </span>
              </p>
              <p className="text-slate-400 text-sm">
                প্লেয়ারকে ৫,৩৫০ টাকা বেট প্লে করতে হবে
              </p>
            </div>
          </Card>

          {/* Withdrawal Rules */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-slate-800 border-2 border-green-700">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">খেলতে পারবে</h4>
                  <p className="text-slate-300">
                    Turnover পূরণ না হলেও খেলা চালিয়ে যেতে পারবে
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-800 border-2 border-red-700">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white font-bold">✗</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">
                    উইথড্র করতে পারবে না
                  </h4>
                  <p className="text-slate-300">
                    Turnover পূরণ না হওয়া পর্যন্ত টাকা তুলতে পারবে না
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Bonus Purpose Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-green-400" />
            বোনাসের মূল উদ্দেশ্য
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-slate-800 border-2 border-slate-700">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">
                    দীর্ঘসময় খেলার উৎসাহ
                  </h4>
                  <p className="text-slate-300">
                    প্লেয়ারকে আরও বেশি সময় খেলার জন্য উৎসাহিত করা
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-800 border-2 border-slate-700">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">
                    নিরাপদ খেলা নিশ্চিত করা
                  </h4>
                  <p className="text-slate-300">
                    খেলাধুলার নিয়ন্ত্রণ এবং দায়িত্বশীল গেমিং প্রচার
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Referral Section */}
        <section>
          <Card className="p-8 bg-slate-800 border-2 border-purple-700">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  রেফারেল বোনাস
                </h3>
                <p className="text-slate-300 mb-4">
                  আপনার বন্ধুকে রেফার করুন এবং উভয়ে বোনাস পান!
                </p>
                <div className="bg-slate-700 p-4 rounded-lg border-l-4 border-purple-500">
                  <p className="text-slate-200 font-semibold">
                    আপনার বন্ধুর প্রথম ডিপোজিটে{" "}
                    <span className="text-purple-400">১০% বোনাস</span> পাবেন
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}
