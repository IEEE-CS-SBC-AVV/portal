"use client";

import { Mail, Linkedin, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { GradientAvatar } from "./GradientAvatar";

interface MemberCardProps {
  name: string;
  role?: string;
  department: string;
  year?: string;
  email: string | null;
  linkedin?: string;
  phone?: string | null;
  bio?: string;
  designation?: string;
  photo?: string | null;
}

export function MemberCard({
  name,
  role,
  department,
  year,
  email,
  linkedin,
  phone,
  bio,
  designation,
  photo,
}: MemberCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="cs-card p-6 h-full flex flex-col bg-white">
      {/* Avatar / Photo */}
      <div className="mx-auto mb-5 relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-md border-4 border-white ">
        {photo && !imageError ? (
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 96px, 112px"
          />
        ) : (
          <div className="w-full h-full">
            <GradientAvatar
              name={name}
              size="md"
              className="!w-full !h-full !text-2xl"
            />
          </div>
        )}
      </div>

      {/* Member Info */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-[#00629B] font-semibold mb-2 text-sm sm:text-base">
          {designation || role}
        </p>
        <p className="text-xs text-gray-600 font-medium">
          {department}
          {year && ` • ${year}`}
        </p>
      </div>

      {/* Bio */}
      <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
        {bio || "No bio available."}
      </p>

      {/* Contact Links */}
      <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100 ">
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-gray-400 hover:text-[#00629B] transition-colors p-1 hover:scale-110"
            aria-label={`Email ${name}`}
          >
            <Mail className="w-5 h-5" />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00629B] transition-colors p-1 hover:scale-110"
            aria-label={`${name} on LinkedIn`}
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
        {phone && (
          <a
            href={`tel:${phone}`}
            className="text-gray-400 hover:text-[#00629B] transition-colors p-1 hover:scale-110"
            aria-label={`Call ${name}`}
          >
            <Phone className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}
