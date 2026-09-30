
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Pencil,
  Plus,
  LogOut,
  Trash2,
  Building2,
  Eye,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { useSelector } from "react-redux";

function Profile() {
  const {currentUser} = useSelector(state => state.user)
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large blurred circle */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-purple-200/30 blur-3xl" />

        {/* Rotating shapes */}
        <div className="absolute right-[12%] top-24 h-20 w-20 rotate-12 rounded-3xl border border-blue-200/50 bg-blue-100/20 backdrop-blur-sm transition-transform duration-1000 hover:rotate-45" />

        <div className="absolute bottom-24 left-[8%] h-16 w-16 rotate-45 rounded-2xl border border-purple-200/50 bg-purple-100/20 backdrop-blur-sm transition-transform duration-1000 hover:rotate-90" />

        <div className="absolute right-[25%] bottom-[18%] h-8 w-8 rounded-full bg-indigo-300/20 blur-sm animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <div className="mb-8 animate-[fadeIn_0.6s_ease-out]">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
            Account Dashboard
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Welcome, {currentUser.email}
          </h1>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Manage your profile, properties and account settings.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid gap-6 lg:grid-cols-3">

          {/* ================= PROFILE CARD ================= */}

          <div
            className="
              group relative overflow-hidden rounded-3xl
              border border-gray-200/80
              bg-white/80
              p-6 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.2)]
              backdrop-blur-xl
              transition-all duration-500
              hover:-translate-y-1
              hover:shadow-[0_25px_70px_-25px_rgba(0,0,0,0.25)]
              lg:col-span-2
            "
          >
            {/* Card gradient */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br from-indigo-200/40 to-purple-200/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />

            {/* Profile Header */}

            <div className="relative flex flex-col gap-5 border-b border-gray-100 pb-7 sm:flex-row sm:items-center">

              {/* Avatar */}

              <div className="relative">

                <img src={currentUser.avatar}
                alt="avatar"
                  className="
                    flex h-24 w-24 items-center justify-center
                    rounded-[2rem]
                    bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950
                    text-3xl font-bold text-white
                    shadow-xl
                    transition-all duration-500
                    group-hover:rotate-3
                    group-hover:scale-105
                  "
                >
                
                </img>

                {/* Online indicator */}

                <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-4 border-white bg-emerald-500">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-white" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-bold text-gray-900">
                  {currentUser.username}
                  </h2>

                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Verified
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-500">
                  Property buyer & seller
                </p>

                <button
                  className="
                    mt-4 inline-flex items-center gap-2
                    rounded-xl border border-gray-200
                    bg-white px-4 py-2
                    text-sm font-medium text-gray-700
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-gray-300
                    hover:bg-gray-50
                    hover:shadow-md
                  "
                >
                  <Pencil className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                  Change Avatar
                </button>
              </div>
            </div>

            {/* ================= PROFILE FIELDS ================= */}

            <div className="relative mt-7 space-y-5">

              {/* Username */}

              <div className="group/field">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Username
                </label>

                <div
                  className="
                    flex items-center gap-3 rounded-2xl
                    border border-gray-200
                    bg-gray-50/80 px-4 py-3.5
                    transition-all duration-300
                    focus-within:border-indigo-400
                    focus-within:bg-white
                    focus-within:shadow-[0_0_0_4px_rgba(99,102,241,0.08)]
                    hover:border-gray-300
                  "
                >
                  <User className="h-5 w-5 text-gray-400 transition-transform duration-300 group-hover/field:scale-110" />

                  <input
                    type="text"
                    defaultValue="Karan Samrat"
                    className="w-full bg-transparent text-sm font-medium text-gray-900 outline-none"
                  />
                </div>
              </div>

              {/* Email */}

              <div className="group/field">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <div
                  className="
                    flex items-center gap-3 rounded-2xl
                    border border-gray-200
                    bg-gray-50/80 px-4 py-3.5
                    transition-all duration-300
                    focus-within:border-indigo-400
                    focus-within:bg-white
                    focus-within:shadow-[0_0_0_4px_rgba(99,102,241,0.08)]
                    hover:border-gray-300
                  "
                >
                  <Mail className="h-5 w-5 text-gray-400 transition-transform duration-300 group-hover/field:scale-110" />

                  <input
                    type="email"
                    defaultValue="karan@example.com"
                    className="w-full bg-transparent text-sm font-medium text-gray-900 outline-none"
                  />
                </div>
              </div>

              {/* Password */}

              <div className="group/field">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Password
                </label>

                <div
                  className="
                    flex items-center gap-3 rounded-2xl
                    border border-gray-200
                    bg-gray-50/80 px-4 py-3.5
                    transition-all duration-300
                    focus-within:border-indigo-400
                    focus-within:bg-white
                    focus-within:shadow-[0_0_0_4px_rgba(99,102,241,0.08)]
                    hover:border-gray-300
                  "
                >
                  <Lock className="h-5 w-5 text-gray-400 transition-transform duration-300 group-hover/field:rotate-6" />

                  <input
                    type="password"
                    value="password123"
                    readOnly
                    className="w-full bg-transparent text-sm font-medium text-gray-900 outline-none"
                  />

                  <button className="text-sm font-semibold text-gray-500 transition-colors hover:text-gray-900">
                    Change
                  </button>
                </div>
              </div>

              {/* Update */}

              <div className="flex justify-end pt-2">
                <button
                  className="
                    group/update relative inline-flex
                    items-center gap-2 overflow-hidden
                    rounded-xl
                    bg-gray-900 px-6 py-3
                    text-sm font-semibold text-white
                    shadow-lg
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-gray-800
                    hover:shadow-xl
                    active:translate-y-0
                  "
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Pencil className="h-4 w-4 transition-transform duration-300 group-hover/update:rotate-12" />
                    Update Profile
                  </span>

                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/update:translate-x-full" />
                </button>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}

          <div className="space-y-6">

            {/* ================= PROPERTY CARD ================= */}

            <div
              className="
                group relative overflow-hidden rounded-3xl
                border border-gray-200/80
                bg-white/80 p-6
                shadow-[0_20px_60px_-25px_rgba(0,0,0,0.18)]
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-1
                hover:shadow-[0_25px_70px_-25px_rgba(0,0,0,0.23)]
              "
            >
              {/* Decorative circle */}

              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-indigo-100/60 transition-transform duration-700 group-hover:scale-150" />

              <div className="relative">

                <div
                  className="
                    mb-5 flex h-12 w-12 items-center justify-center
                    rounded-2xl
                    bg-gray-900 text-white
                    shadow-lg
                    transition-all duration-500
                    group-hover:rotate-6
                    group-hover:scale-110
                  "
                >
                  <Building2 className="h-5 w-5" />
                </div>

                <h2 className="text-lg font-bold text-gray-900">
                  My Properties
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Manage your listed properties or add a new property.
                </p>

                <div className="mt-6 space-y-3">

                  {/* POST PROPERTY */}

                  <Link
                    to="/post-property"
                    className="
                      group/button flex w-full
                      items-center justify-between
                      rounded-2xl
                      bg-gray-900 px-4 py-3.5
                      text-sm font-semibold text-white
                      shadow-md
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:bg-gray-800
                      hover:shadow-xl
                    "
                  >
                    <span className="flex items-center gap-2">
                      <Plus className="h-4 w-4 transition-transform duration-300 group-hover/button:rotate-90" />
                      Post a Property
                    </span>

                    <ArrowUpRight
                      className="
                        h-4 w-4
                        transition-transform duration-300
                        group-hover/button:translate-x-1
                        group-hover/button:-translate-y-1
                      "
                    />
                  </Link>

                  {/* MY PROPERTIES */}

                  <Link
                    to="/my-properties"
                    className="
                      group/button flex w-full
                      items-center justify-between
                      rounded-2xl
                      border border-gray-200
                      bg-white px-4 py-3.5
                      text-sm font-semibold text-gray-700
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-gray-300
                      hover:bg-gray-50
                      hover:shadow-md
                    "
                  >
                    <span className="flex items-center gap-2">
                      <Eye className="h-4 w-4 transition-transform duration-300 group-hover/button:scale-110" />
                      Show My Properties
                    </span>

                    <ArrowUpRight
                      className="
                        h-4 w-4
                        transition-all duration-300
                        group-hover/button:translate-x-1
                        group-hover/button:-translate-y-1
                      "
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* ================= ACCOUNT CARD ================= */}

            <div
              className="
                group rounded-3xl
                border border-gray-200/80
                bg-white/80 p-6
                shadow-[0_20px_60px_-25px_rgba(0,0,0,0.18)]
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-1
              "
            >
              <h2 className="text-lg font-bold text-gray-900">
                Account Settings
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Manage your account access.
              </p>

              <div className="mt-5 space-y-3">

                {/* SIGN OUT */}

                <button
                  className="
                    group/logout flex w-full
                    items-center justify-between
                    rounded-2xl
                    border border-gray-200
                    px-4 py-3.5
                    text-sm font-semibold text-gray-700
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-gray-50
                    hover:shadow-sm
                  "
                >
                  <span className="flex items-center gap-3">
                    <LogOut className="h-5 w-5 transition-transform duration-300 group-hover/logout:translate-x-1" />
                    Sign Out
                  </span>

                  <ArrowUpRight
                    className="h-4 w-4 opacity-0 transition-all duration-300 group-hover/logout:translate-x-1 group-hover/logout:opacity-100"
                  />
                </button>

                {/* DELETE */}

                <button
                  className="
                    group/delete flex w-full
                    items-center justify-between
                    rounded-2xl
                    border border-red-100
                    bg-red-50/40
                    px-4 py-3.5
                    text-sm font-semibold text-red-600
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-red-200
                    hover:bg-red-50
                    hover:shadow-sm
                  "
                >
                  <span className="flex items-center gap-3">
                    <Trash2
                      className="
                        h-5 w-5
                        transition-transform duration-300
                        group-hover/delete:rotate-12
                      "
                    />
                    Delete Account
                  </span>

                  <ArrowUpRight
                    className="h-4 w-4 opacity-0 transition-all duration-300 group-hover/delete:translate-x-1 group-hover/delete:opacity-100"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= ACCOUNT STATS ================= */}

        <div
          className="
            mt-6 overflow-hidden rounded-3xl
            border border-gray-200/80
            bg-white/80
            shadow-[0_20px_60px_-25px_rgba(0,0,0,0.15)]
            backdrop-blur-xl
            transition-all duration-500
            hover:shadow-[0_25px_70px_-25px_rgba(0,0,0,0.2)]
          "
        >
          <div className="grid divide-y divide-gray-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">

            {/* STAT 1 */}

            <div className="group p-6 transition-colors duration-300 hover:bg-gray-50/70">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                Account Type
              </p>

              <div className="mt-2 flex items-center gap-2">
                <p className="font-bold text-gray-900">
                  Regular User
                </p>

                <span className="h-2 w-2 rounded-full bg-emerald-500 transition-transform duration-300 group-hover:scale-150" />
              </div>
            </div>

            {/* STAT 2 */}

            <div className="group p-6 transition-colors duration-300 hover:bg-gray-50/70">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                Properties Listed
              </p>

              <p className="mt-2 font-bold text-gray-900 transition-transform duration-300 group-hover:translate-x-1">
                0 Properties
              </p>
            </div>

            {/* STAT 3 */}

            <div className="group p-6 transition-colors duration-300 hover:bg-gray-50/70">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                Member Since
              </p>

              <p className="mt-2 font-bold text-gray-900 transition-transform duration-300 group-hover:translate-x-1">
              {new Date(currentUser.createdAt).toLocaleDateString("en-GB")}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ================= CUSTOM ANIMATION ================= */}

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(12px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Profile;

