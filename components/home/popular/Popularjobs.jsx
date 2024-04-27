/*import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../Hook/useFetch";

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
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
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;*/

import { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

// Define hardcoded popular jobs
const popularJobsData = [

  {
    job_id: 1,
    employer_name: "Financial Aid",
    job_title: "Teacher Assistant ",
    job_publisher: "Admin",
    job_country: " AUI",
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

];

const Popularjobs = () => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState(null);

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={popularJobsData} // Use hardcoded data array
          renderItem={({ item }) => (
            <PopularJobCard
              item={item}
              selectedJob={selectedJob}
              handleCardPress={handleCardPress}
            />
          )}
          keyExtractor={(item) => item.job_id.toString()} // Ensure unique keys
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Popularjobs;
