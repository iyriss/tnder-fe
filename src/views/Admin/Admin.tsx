import React, { useState } from "react";
import { ProfileApi } from "../../apis/ProfileApi";

export const Admin: React.FC = () => {
  // {
  //     name: "Luis",
  //     age: 29,
  //     job: "MI6 @ British Intelligence",
  //     description:
  //       "Experienced infiltration operator. Count on me to get the job done. Quietly.",
  //   }
  const [profile, setProfile] = useState({
    name: "name",
    age: 18,
    job: "job",
    description: "bio",
  });

  const profileApi = new ProfileApi();

  const createProfile: any = (e: any) => {
    e.preventDefault();
    profileApi.createProfile(profile);
  };

  const handleChange: any = (e: any) => {
    let newValue = {};
    newValue = { [e.target.name]: e.target.value };
    //@ts-ignore
    setProfile((profile) => ({
      ...profile,
      ...newValue,
    }));
  };

  return (
    <div>
      <div>Create Profile here</div>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={profile.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Job:
          <input
            type="text"
            name="job"
            value={profile.job}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Bio:
          <input
            type="text"
            name="description"
            value={profile.description}
            onChange={handleChange}
          />
        </label>
      </form>
      <button onClick={createProfile}>Create Profile</button>
    </div>
  );
};

export default Admin;
