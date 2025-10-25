import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertCircle,
  CheckCircle2,
  DollarSign,
  Users,
  Shield,
  Trophy,
} from "lucide-react";

export default function WalletAgentRules() {
  return (
    <div className="min-h-screen bg-slate-950 border-b border-slate-800  text-foreground">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-balance text-white">
                ওয়ালেট এজেন্ট হওয়ার নিয়মাবলি
              </h1>
              <p className="text-slate-400 text-sm">
                কর্তৃপক্ষ দ্বারা নির্ধারিত নিয়ম ও শর্তাবলী
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-white leading-relaxed">
            আমাদের এই এজেন্ট লিস্টে ওয়ালেট এজেন্ট হতে হলে নিচের নিয়মগুলো মেনে
            চলতে হবে —
          </p>
        </section>

        {/* Rules Grid */}
        <div className="grid gap-6 mb-12">
          {/* Rule 1: Contact */}
          <Card className="bg-slate-800 border-2 border-slate-700 hover:border-amber-600 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl text-white">
                <Users className="w-6 h-6 text-amber-600" />
                ১. যোগাযোগ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400 leading-relaxed">
                প্রথমে আপনাকে প্রধান এজেন্টের সাথে হোয়াটসঅ্যাপে যোগাযোগ করতে
                হবে।
              </p>
            </CardContent>
          </Card>

          {/* Rule 2: Rate & Points */}
          <Card className="bg-slate-800 border-2 border-slate-700 hover:border-amber-600 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl text-white">
                <DollarSign className="w-6 h-6 text-amber-600" />
                ২. রেট ও পয়েন্ট সিস্টেম
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-start p-3 bg-slate-700 rounded-lg border border-slate-600">
                  <span className="font-semibold text-white">
                    নির্ধারিত রেট:
                  </span>
                  <span className="text-blue-500 font-bold text-lg">
                    ৭০ টাকা (Fix Rate)
                  </span>
                </div>
                <div className="flex justify-between items-start p-3 bg-slate-700 rounded-lg border border-slate-600">
                  <span className="font-semibold text-white">
                    প্রাথমিক জামানত:
                  </span>
                  <span className="text-orange-500 font-bold">
                    ৳১,০০,০০০ (অফেরতযোগ্য)
                  </span>
                </div>
                <div className="flex justify-between items-start p-3 bg-slate-700 rounded-lg border border-slate-600">
                  <span className="font-semibold text-white">
                    প্রাথমিক পয়েন্ট ক্রয়:
                  </span>
                  <span className="text-yellow-500 font-bold">
                    ১০০০ পয়েন্ট × ৭০ = ৳৭০,০০০
                  </span>
                </div>
                <div className="flex justify-between items-start p-3 bg-slate-700 rounded-lg border border-slate-600">
                  <span className="font-semibold text-white">
                    মোট শুরুতে বিনিয়োগ:
                  </span>
                  <span className="text-green-500 font-bold text-lg">
                    ৳১,৭০,০০০
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-white">
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-400">
                    আইডিতে ন্যূনতম ১০০০ পয়েন্ট রাখতে হবে।
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-400">
                    অতিরিক্ত পয়েন্ট কোম্পানির কাছে পুনরায় উইথড্র (Buy Back)
                    দিতে পারবেন — একই ক্রয়মূল্যে।
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rule 3: Customer Service */}
          <Card className="bg-slate-800 border-2 border-slate-700 hover:border-amber-600 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl text-white">
                <Shield className="w-6 h-6 text-amber-600" />
                ৩. গ্রাহক সেবা
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400 leading-relaxed">
                সব ধরনের গ্রাহক সেবার ক্ষেত্রে কোম্পানির অফিসিয়াল হোয়াটসঅ্যাপ
                নাম্বার ব্যবহার করা বাধ্যতামূলক।
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Rate 70 */}
        <section className="mb-12">
          <Card className="bg-slate-800 border-2 border-slate-700 hover:border-amber-600">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                💬 কেন আমাদের রেট ৭০ টাকা নির্ধারিত?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-400 leading-relaxed">
                আমাদের লক্ষ্য শুধু বিক্রি নয়, নিশ্চিত নিরাপত্তা ও গ্রাহক আস্থা
                নিশ্চিত করা। এই রেটের মাধ্যমে —
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-white">
                    প্রতিটি এজেন্ট তাদের পয়েন্টের নিরাপত্তা ও স্থায়িত্ব পায়
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-white">
                    শীর্ষ নিয়ন্ত্রক ও গ্রাহকের মধ্যে ট্রাস্ট বজায় থাকে
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-white">
                    বাজারে স্থিতিশীল মূল্যনীতি নিশ্চিত হয়
                  </span>
                </li>
              </ul>
              <p className="text-blue-500 font-semibold pt-2">
                এটাই আমাদের "গ্রাহক নিশ্চয়তা নীতি"।
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Violation Terms */}
        <section className="mb-12">
          <Card className="bg-slate-800 border-2 border-slate-700 hover:border-amber-600 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-white text-destructive">
                <AlertCircle className="w-6 h-6 text-amber-600" />
                <span className="text-white">
                  এজেন্ট লিস্টের নিয়ম লঙ্ঘন সম্পর্কিত শর্তাবলী
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-slate-400 leading-relaxed mb-4">
                  যদি কোনো প্রধান এজেন্ট কর্তৃপক্ষ নির্ধারিত ৭০ টাকা রেটের বাইরে
                  কম দামে পয়েন্ট বিক্রি করেন, এবং কেউ তার প্রমাণ দিতে পারেন —
                </p>
                <div className="space-y-3 pl-4 border-l-2 border-amber-600">
                  <div className="flex gap-3 items-start text-white">
                    <span>
                      প্রমাণকারীকে কর্তৃপক্ষ থেকে ৳১,০০,০০০ পুরস্কার প্রদান করা
                      হবে।
                    </span>
                  </div>
                  <div className="flex gap-3 items-start text-white">
                    <span>
                      সেই সাথে উক্ত প্রধান এজেন্টের এজেন্টশিপ বাতিল করা হবে এবং
                      জামানত বাজেয়াপ্ত হবে।
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700 rounded-lg border border-slate-600 p-4">
                <p className="font-semibold mb-3 text-white">তবে শর্ত:</p>
                <ul className="space-y-2 text-sm text-white">
                  <li>
                    • প্রমাণকারীকে অবশ্যই ঐ রেটে এজেন্ট নেওয়ার সক্ষমতা থাকতে
                    হবে। অথবা আমাদের ই প্রধান এজেন্ট শুরুতেই এই প্রলোভন দেখায়।
                  </li>
                  <li>
                    • কেউ যদি শুধুমাত্র প্রলোভন বা ভুল বোঝানোর মাধ্যমে প্রমাণ
                    আদায় করে, তাহলে সে পুরস্কারের যোগ্য বলে গণ্য হবে না।
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Summary Table */}
        <section>
          <Card className="bg-slate-800 border-2 border-slate-700 hover:border-amber-600">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-300">
                সারসংক্ষেপ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-slate-700">
                    <tr className="hover:bg-orange-500/10 transition-colors">
                      <td className="py-3 px-4 font-semibold text-white">
                        নির্ধারিত রেট
                      </td>
                      <td className="py-3 px-4 text-right text-white font-bold">
                        ৭০ টাকা
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-500/10 transition-colors">
                      <td className="py-3 px-4 font-semibold text-white">
                        জামানত
                      </td>
                      <td className="py-3 px-4 text-right text-white font-bold">
                        ১,০০,০০০ টাকা (অফেরতযোগ্য)
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-500/10 transition-colors">
                      <td className="py-3 px-4 font-semibold text-white">
                        প্রাথমিক পয়েন্ট
                      </td>
                      <td className="py-3 px-4 text-right text-white font-bold">
                        ১০০০
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-500/10 transition-colors">
                      <td className="py-3 px-4 font-semibold text-white">
                        মোট শুরুতে লাগবে
                      </td>
                      <td className="py-3 px-4 text-right text-white font-bold">
                        ১,৭০,০০০ টাকা
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-500/10 transition-colors">
                      <td className="py-3 px-4 font-semibold text-white">
                        অফিসিয়াল যোগাযোগ
                      </td>
                      <td className="py-3 px-4 text-right text-white font-bold">
                        প্রধান এজেন্ট
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-500/10 transition-colors">
                      <td className="py-3 px-4 font-semibold text-white">
                        নীতি
                      </td>
                      <td className="py-3 px-4 text-right text-white font-bold">
                        স্থিতিশীল রেট ও গ্রাহক নিশ্চয়তা
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
