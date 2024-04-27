/*import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";
import { checkImageURL } from "../../../../utils";

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job?.job_title}
        </Text>

        <Text style={styles.jobType}>{job?.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;*/

import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./nearbyjobcard.style";
import { checkImageURL } from "../../../../utils";

const NearbyJobCard = ({ job, handleNavigate }) => {
  const employerLogo =
    job.employer_name === "Center for learning excellence"
      ? "https://media.licdn.com/dms/image/C4E0BAQFPOvV5M0S2jA/company-logo_200_200/0/1678127138758/center_for_learning_excellence_al_akhawayn_university_logo?e=2147483647&v=beta&t=0t16oc-1R3ddh3-aSMJw55DUSvJ1CqRevhL823WYBHE"
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Al_Akhawayn_University_Logo.png/1200px-Al_Akhawayn_University_Logo.png";

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.employer_logo) ? job.employer_logo : employerLogo,
          }}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job?.job_title}
        </Text>

        <Text style={styles.jobType}>{job?.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;


