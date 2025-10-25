import {
  Award,
  DollarSign,
  Wallet,
  CheckCircle,
  Users,
  AlertCircle,
  TrendingUp,
  Shield,
} from "lucide-react";

export default function MainAgentRulePage() {
  return (
    <div className="dark min-h-screen bg-slate-950 text-white">
      <main className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 1: Rate */}
          <section className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-start gap-6">
              <div className="hidden md:block p-3 bg-amber-500/20 rounded-lg shrink-0">
                <DollarSign className="w-6 h-6 text-amber-500" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-3xl font-bold text-white mb-6 wrap-break-word">
                  ১. রেট নির্ধারণ
                </h2>
                <div className="space-y-4 text-white">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
                    <div>
                      <span className="font-semibold text-white">
                        Rate Fixed:
                      </span>{" "}
                      ৫০ টাকা (স্থায়ী)
                    </div>
                  </div>
                  <p>
                    এই রেটটি কর্তৃপক্ষ কর্তৃক নির্ধারিত এবং পরিবর্তনযোগ্য নয়।
                  </p>
                  <p>
                    তখনই ৫০ টাকা রেট থেকে কমানো হবে যখন উক্ত প্রধান এজেন্টের তার
                    আন্ডারে থাকা সিনিয়র এজেন্টের মাসে ৩০,০০০ USD+ সেল থাকবে।
                  </p>
                  <div className="mt-6 p-5 bg-slate-800/50 rounded-lg border border-amber-500/30">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-white">
                        <span className="text-amber-400 font-semibold">
                          উদ্দেশ্য:
                        </span>{" "}
                        একটি স্থিতিশীল ও স্বচ্ছ লেনদেন ব্যবস্থা বজায় রাখা, যাতে
                        পয়েন্টের মূল্য সর্বস্তরে সমান থাকে এবং বাজারে কোনো
                        প্রতিযোগিতামূলক বিভ্রান্তি তৈরি না হয়।
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Deposit */}
          <section className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-start gap-6">
              <div className="hidden md:block p-3 bg-orange-500/20 rounded-lg shrink-0">
                <Wallet className="w-6 h-6 text-orange-500" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-3xl font-bold text-white mb-6 wrap-break-word">
                  ২. জামানত ও প্রাথমিক পয়েন্ট
                </h2>
                <div className="space-y-6 text-white">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-lg p-6 border border-orange-500/30">
                      <div className="flex items-center gap-2 mb-3">
                        <Shield className="w-5 h-5 text-orange-500" />
                        <p className="text-sm text-slate-300">জামানত</p>
                      </div>
                      <p className="text-3xl font-bold text-orange-400">
                        ৳২,৫০,০০০
                      </p>
                      <p className="text-xs text-slate-300 mt-2">
                        (অফেরতযোগ্য)
                      </p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-6 border border-amber-500/30">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-5 h-5 text-amber-500" />
                        <p className="text-sm text-slate-300">
                          প্রাথমিক পয়েন্ট
                        </p>
                      </div>
                      <p className="text-3xl font-bold text-amber-400">
                        ১০,০০০ × ৫০
                      </p>
                      <p className="text-xs text-slate-300 mt-2">= ৳৫,০০,০০০</p>
                    </div>
                  </div>
                  <div className="mt-6 p-5 bg-linear-to-r from-amber-500/20 to-orange-500/20 rounded-lg border border-amber-500/50">
                    <div className="flex items-center gap-3">
                      <Award className="w-6 h-6 text-amber-400 shrink-0" />
                      <p className="font-bold text-white">
                        শুরুতে মোট বিনিয়োগ: ৳৭,৫০,০০০
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Balance */}
          <section className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-start gap-6">
              <div className="hidden md:block p-3 bg-amber-500/20 rounded-lg shrink-0">
                <Wallet className="w-6 h-6 text-amber-500" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-3xl font-bold text-white mb-6 wrap-break-word">
                  ৩. পয়েন্ট ব্যালেন্স ও উইথড্র
                </h2>
                <div className="space-y-4 text-white">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                    <p>
                      আইডিতে সর্বনিম্ন{" "}
                      <span className="font-semibold text-white">
                        ১০,০০০ পয়েন্ট
                      </span>{" "}
                      ব্যালেন্স রাখতে হবে।
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                    <p>
                      অতিরিক্ত পয়েন্ট কোম্পানির কাছ থেকে উইথড্র (Buy Back) করা
                      যাবে, ক্রয়মূল্যের সমপরিমাণে।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Responsibilities */}
          <section className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-start gap-6">
              <div className="hidden md:block p-3 bg-orange-500/20 rounded-lg shrink-0">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-3xl font-bold text-white mb-6 wrap-break-word">
                  ৪. দায়িত্ব ও কর্তব্য
                </h2>
                <div className="space-y-4 text-white">
                  <ul className="space-y-3">
                    <li className="flex gap-4">
                      <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span>
                        প্রধান এজেন্ট হিসেবে নিচের স্তরের ওয়ালেট এজেন্ট ও
                        গ্রাহকদের সঠিকভাবে পরিচালনা ও সহায়তা করতে হবে।
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span>
                        সকল আর্থিক লেনদেন শীর্ষ নিয়ন্ত্রক অফিসিয়াল পেমেন্ট
                        চ্যানেলের মাধ্যমেই সম্পন্ন করতে হবে।
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span>
                        গ্রাহক ও সাপোর্টের জন্য কোম্পানি অফিসিয়াল হোয়াটসঅ্যাপ
                        নাম্বার ব্যবহার করা বাধ্যতামূলক।
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Requirements */}
          <section className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-start gap-6">
              <div className="hidden md:block p-3 bg-amber-500/20 rounded-lg shrink-0">
                <TrendingUp className="w-6 h-6 text-amber-500" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-3xl font-bold text-white mb-6 wrap-break-word">
                  ৫. ই-লিস্ট থেকে প্রধান এজেন্ট হওয়ার শর্ত
                </h2>
                <div className="space-y-6 text-white">
                  <p>
                    আমাদের ই লিস্টে কোনো ওয়ালেট এজেন্ট যদি প্রধান এজেন্ট হতে
                    চান সেক্ষেত্রে নিম্নলিখিত শর্ত পূরণ করতে হবে:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-lg p-6 border border-orange-500/30">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="w-5 h-5 text-orange-500" />
                        <p className="text-sm text-slate-300">রানিং ইউজার</p>
                      </div>
                      <p className="text-3xl font-bold text-orange-400">১৫০+</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-6 border border-amber-500/30">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-5 h-5 text-amber-500" />
                        <p className="text-sm text-slate-300">
                          মাসিক পয়েন্ট সেল
                        </p>
                      </div>
                      <p className="text-3xl font-bold text-amber-400">
                        ১০,০০০+
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 italic">
                    ( তখন কর্তৃপক্ষ বিবেচনা করবে)
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
