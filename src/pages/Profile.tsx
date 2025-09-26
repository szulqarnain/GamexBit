import { MdOutlineContentCopy } from "react-icons/md";
import profileAvatar from "../assets/images/profile-avatar.jpg";
import { FaEdit } from "react-icons/fa";

export default function ProfileCard() {
  return (
    <>
      <h2 className="mx-4 my-6 font-bold text-[24px] text-[rgb(var(--primary-text))]">
        profile
      </h2>
      <div className=" mb-14 mx-4 bg-[rgb(var(--bg))] rounded-2xl shadow p-6 sm:p-10 border border-[rgb(var(--border))]">
        <div className="max-w-xl mx-auto">
          {/* Avatar + Name */}
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <img
                src={profileAvatar}
                alt="User Avatar"
                className="w-24 h-24 rounded-full border border-[rgb(var(--border))]"
              />
              <button className="flex items-center justify-center p-[10px] absolute bottom-0 right-0 bg-[rgb(var(--bg))] text-[rgb(var(--link-text))] rounded-full shadow ">
                <FaEdit size={20} />
              </button>
            </div>
            <h5 className="mt-10 font-bold text-[24px] text-[rgb(var(--primary-text))]">
              Ahmer Ilyas
            </h5>
            <p className="m-4 flex items-center gap-2 text-sm text-[rgb(var(--primary-text))]">
              UID: GX548841252
              <MdOutlineContentCopy
                size={20}
                className="cursor-pointer text-[rgb(var(--link-text))]"
              />
            </p>
          </div>
          {/* General Information */}
          <div className="mt-10">
            <h3 className="font-bold text-[rgb(var(--primary-text))] mb-3">
              General Information
            </h3>
            <div className="bg-[rgb(var(--bg-secondary-nrm))] rounded-xl p-6 border border-[rgb(var(--border))] shadow-[inset_0px_16px_100px_0px_#8A21FF0A]">
              <div className="flex items-center justify-between">
                <div>
                  <p className=" text-[rgb(var(--secondary-text))]">
                    User Name
                  </p>
                  <p className="text-[rgb(var(--primary-text))] font-medium">
                    Ahmer Ilyas
                  </p>
                </div>
                <button className="flex items-center justify-center gap-1 text-sm text-[rgb(var(--link-text))] hover:underline bd-nrm-reg">
                  <FaEdit size={20} />
                  Edit
                </button>
              </div>
              <div className="mt-4">
                <p className="text-[rgb(var(--secondary-text))]">
                  Email Address
                </p>
                <p className="text-[rgb(var(--primary-text))] font-medium">
                  ahmerilyassial@gmail.com
                </p>
              </div>
            </div>
          </div>
          {/* Notification Settings */}
          <div className="mt-8">
            <h3 className="font-bold text-[rgb(var(--primary-text))] mb-3">
              Notification Settings
            </h3>
            <div className="bg-[rgb(var(--bg-secondary-nrm))] rounded-xl p-6 border border-[rgb(var(--border))] shadow-[inset_0px_16px_100px_0px_#8A21FF0A] space-y-4">
              {/* Toggle Item */}
              <div className="flex items-center justify-between">
                <p className="text-[rgb(var(--primary-text))]">
                  Notification 1
                </p>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[rgb(var(--link-text))] after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[rgb(var(--primary-text))]">
                  Notification 2
                </p>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[rgb(var(--link-text))] after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
