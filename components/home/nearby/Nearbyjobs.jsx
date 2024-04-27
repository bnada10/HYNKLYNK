/*import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./nearbyjobs.style";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../Hook/useFetch";

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React Native developer",
    num_pages: "1",
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;*/

import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import styles from "./nearbyjobs.style";

const Nearbyjobs = () => {
  const data = [
    {
      job_id: 1,
      employer_name: "Financial Aid",
      job_title: "Teacher Assistant",
      job_publisher: "Admin",
      job_country: "AUI",
    },
    {
      job_id: 2,
      employer_name: "Housing",
      job_title: "Resident Assistant ",
      job_publisher: "Admin",
      job_country: " AUI",
    },
    {
      job_id: 3,
      employer_name: "Center for learning excellence",
      job_title: "Mentor ",
      job_publisher: "Admin",
      job_country: " AUI",
    },
    {
      job_id: 4,
      employer_name: "Center for learning excellence",
      job_title: "Tutor",
      job_publisher: "Admin",
      job_country: " AUI",
    },
    {
      job_id: 5,
      employer_name: "Library",
      job_title: "Library Assistant",
      job_publisher: "Admin",
      job_country: "AUI",
    },
    {
      job_id: 6,
      employer_name: "IT Services",
      job_title: "IT Support",
      job_publisher: "Admin",
      job_country: "AUI",
    },
    {
      job_id: 7,
      employer_name: "Athletics Department",
      job_title: "Fitness Trainer",
      job_publisher: "Admin",
      job_country: "AUI",
    },
    {
      job_id: 8,
      employer_name: "Student Services",
      job_title: "Student Advisor",
      job_publisher: "Admin",
      job_country: "AUI",
    },

    {
      job_id: 9,
      employer_name: "Career Development Center",
      job_title: "Career Advisor",
      job_publisher: "Admin",
      job_country: "AUI",
    },
    {
      job_id: 10,
      employer_name: "Academic Support",
      job_title: "Study Group Leader",
      job_publisher: "Admin",
      job_country: "AUI",
    },
    {
      job_id: 11,
      employer_name: "Health Services",
      job_title: "Health Assistant",
      job_publisher: "Admin",
      job_country: "AUI",
    },
    {
      job_id: 12,
      employer_name: "Counseling Center",
      job_title: "Counselor",
      job_publisher: "Admin",
      job_country: "AUI",
    },
    {
      job_id: 13,
      employer_name: "Student Activities",
      job_title: "Event Coordinator",
      job_publisher: "Admin",
      job_country: "AUI",
    },

  ];

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>


      <View>
        {data.map((job) => (
          <NearbyJobCard
            job={job}
            key={`nearby-job-${job.job_id}`}
            // Add handleNavigate functionality as needed
          />
        ))}
      </View>
    </View>
  );
};

export default Nearbyjobs;
