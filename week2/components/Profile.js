import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import Comment from "./Comment";

function Profile() {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#202324",
      paddingTop: 30,
      padding: 10,
    },
    imageContainer: {
      marginVertical: 10,
      alignItems: "center", // Center the image horizontally
    },
    image: {
      width: 200,
      height: 200,
      borderWidth: 5,
      borderColor: "#666",
      borderRadius: 25,
    },
    text: {
      marginVertical: 10,
      color: "rgb(189, 183, 174)",
    },
    textLarge: {
      fontSize: 18,
      marginVertical: 10,
      color: "rgb(249, 243, 234)",
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.textLarge}>Brad's Profile</Text>
        <Text style={styles.textLarge}>North Seattle College AD340</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../public/images/profilepic.jpg")}
          />
        </View>
        <Text style={styles.textLarge}>Professional life</Text>
        <Text style={styles.text}>
          My name is Bradley Charles and I am taking application development at
          North Seattle College. I am transferring from Big Sandy Community and
          Technical College, which is located in Eastern Kentucky, where I was
          also taking programming classes. My goal at NSC is to learn the skills
          I need to start my career in either an IT or a similar field that lets
          me use my knowledge and understanding of technology to solve problems.
          I currently work as a computer and cell phone repair technician, which
          allows me to use my skills in a very hands-on manner, and I am excited
          to be adding to that by taking this class.
        </Text>
        <Text style={styles.textLarge}>Personal life</Text>
        <Text style={styles.text}>
          I grew up in the Appalachian mountains and am very fond of hiking,
          swimming, and camping when the weather is nice. When I am not getting
          outside, I am usually playing games with my wife and friends either
          online or in person. We enjoy playing board games as well as card
          games. We recently started playing a tabletop RPG called Legend of the
          Five Rings. I like to read books and watch television. Sci-fi and
          fantasy are among my favorite genres.
        </Text>
      </View>
      <Comment />
    </ScrollView>
  );
}

export default Profile;
