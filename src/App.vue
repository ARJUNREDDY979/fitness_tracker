<template>
  <div id="app">
  <MyHeader/>

    <!-- Hero Section -->
    <div id="home" class="hero">
      <div class="hero-content">
        <h2>Welcome to Our Fitness Center</h2>
        <h2>Your journey to a healthier life starts here.</h2>
        <button class="cta-button">Join Now</button>
      </div>
    </div>

    <!-- Services Section -->
    <div id="services" class="services">
      <h2>Our Services</h2>
      <div class="service-cards">
        <div class="card">
          <img src="https://wellyx.com/wp-content/uploads/2022/04/Choosing-the-List-of-Essential-Equipment-for-Your-Gym-1024x372.jpg" alt="Gym Equipment" />
          <p>State-of-the-art Gym Equipment</p>
        </div>
        <div class="card">
          <img src="https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png?resize=1200:*" alt="Personal Training" />
          <p>Personal Training Programs</p>
        </div>
        <div class="card">
          <img src="https://www.beckwithhealthclub.co.uk/wp-content/uploads/2018/12/Barbell_Group_Fitness_Class2-e1545048979474.jpg" alt="Group Classes" />
          <p>Group Classes (Yoga, Zumba)</p>
        </div>
        <div class="card">
          <img src="https://www.arcare.net/wp-content/uploads/2020/08/nutrition-Counseling.jpg" alt="Nutrition Counseling" />
          <p>Nutrition Counseling</p>
        </div>
      </div>
    </div>

    <div>
  <div id="app">
    <!-- Membership Plans Section -->
    <div id="plans" class="plans-section">
      <h2>Membership Plans</h2>
      <div class="plan-row">
        <div class="plan-card basic">
          <h3>Basic Plan</h3>
          <p>$29.99/month</p>
          <p>Access to gym facilities</p>
        </div>
        <div class="plan-card premium">
          <h3>Premium Plan</h3>
          <p>$49.99/month</p>
          <p>Includes group classes</p>
        </div>
        <div class="plan-card vip">
          <h3>VIP Plan</h3>
          <p>$79.99/month</p>
          <p>All-inclusive access</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="testimonials-section" class="testimonials-section">
  <h2>What Our Members Say</h2>
  <div class="testimonials-row">
    <!-- Testimonial 1 -->
    <div class="testimonial-card">
      <img src="https://www.thehealthjournals.com/wp-content/uploads/2016/03/Sarah.jpg" alt="Sarah">
      <blockquote>"The best gym experience I've ever had!"</blockquote>
      <p>- Sarah</p>
    </div>
    <!-- Testimonial 2 -->
    <div class="testimonial-card">
      <img src="https://i.tribune.com.pk/media/images/943766-john-1440403091/943766-john-1440403091.jpg" alt="John">
      <blockquote>"The trainers are amazing and motivating!"</blockquote>
      <p>- John</p>
    </div>
    <!-- Testimonial 3 -->
    <div class="testimonial-card">
      <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/2-model-emily-working-out-in-gym-dan-friend.jpg" alt="Emily">
      <blockquote>"I love the group classes, so much fun!"</blockquote>
      <p>- Emily</p>
    </div>
  </div>
</div>
</div>
    <!-- Fitness Tracker Data Section -->
    <div id="fitness-data" class="fitness-data">
      <h2>Fitness Tracker</h2>
      <FitnessBox :activities="fitnessData" />
    </div>

    <!-- Contact Us Section -->
    <div id="contact-section" class="contact-section">
  <!-- Fitness Information -->
  <div class="info-box">
    <h2>About Fitness Center</h2>
    <p>
      Here, we help you achieve your health goals with modern equipment and expert trainers.
    </p>
    <ul>
      <li>State-of-the-art gym equipment</li>
      <li>Personalized fitness programs</li>
      <li>Flexible membership plans</li>
      <li>Open 7 days a week</li>
    </ul>
  </div>

  <!-- Contact Us Form -->
  <div class="contact-form-container" id="contact">
    <h2>Contact Us</h2>
    <form class="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" placeholder="Write your message" required></textarea>
      </div>
      <button type="submit" class="submit-button">Send Message</button>
    </form>
  </div>
</div>

</template>

<script>
import MyHeader from './components/MyHeader.vue';
import FitnessBox from './components/FitnessBox.vue';
export default {
  components:{MyHeader,FitnessBox},
  data() {
    return {
      fitnessData: [],
    };
  },
  async mounted() {
    try {
      const response = await fetch('https://regal-kulfi-ced23e.netlify.app/db.json');
      const data = await response.json();
      this.fitnessData = data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
};
</script>

<style scoped>
/* General Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  background-color: #f4f4f9;
}

.hero {
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url('https://sportsfacilities.com/wp-content/uploads/2016/12/Innovative-Fitness-1024x683.jpeg') no-repeat center center/cover;
  padding: 100px 20px;
  color: white;
}

.services {
  background-color: #f3f4f6;
  padding: 20px;
  margin: 5px;
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns for larger screens */
  gap: 10px;
  margin: 10px;
}

.card img {
  width: 300px;
  height: 250px;
  border-radius: 2px;
  margin: 15px;
}

.plans-section {
  padding: 30px;
  background-color: lightgreen; 
}
.plan-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  align-items: center;
}
.plan-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.plan-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}
.plan-card img {
  width: 100px;
  height: auto;
  margin-bottom: 15px;
}
.plan-card h3 {
  font-size: 20px;
  color: #070c19;
  margin-bottom: 10px;
}
.plan-card p {
  font-size: 16px;
  color: #201919;
}
.basic {
  background-color: rgb(215, 203, 194); 
}
.premium {
  background-color: lightblue; 
}
.vip {
  background-color: lightpink; 
}
/* Testimonials Section */
.testimonials-section {
  padding:40px 20px;
  background-color:lightgrey; 
}

.testimonials-row {
  display:grid;
  grid-template-columns:repeat(3, 1fr); /* Display all testimonials in one row */
  gap:20px;
  justify-content:center;
  align-items:center;
}

.testimonial-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.testimonial-card img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
  border: 2px solid #1e3a8a;
}

blockquote {
  font-style: italic;
  color: #555;
  margin: 10px 0;
}

p {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}
/* Fitness Tracker Section */
.fitness-data {
  text-align: center;
  padding: 40px 20px;
  background-color: #adabab;
}

.fitness-data h2 {
  font-size: 24px;
  color: #303134;
  margin-bottom: 20px;
}

.fitness-grid {
  display: grid;
  grid-template-columns: repeat(2,1fr); /* Two cards per row */
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.entry-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #ffffff; 
  padding: 15px;
  border-radius: 8px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s , box-shadow 0.3s ease-in-ou;
}

.entry-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); 
}

.entry-image {
  width: 80px;
  height: 80px;
  border-radius: 50%; /* Circular images */
  margin-bottom: 15px;
  border: 2px solid #1e3a8a;
}

.entry-content {
  font-size: 16px;
  color: #333;
}
.contact-section {
  display: grid; /* Use CSS Grid */
  grid-template-columns: 1fr 1fr; /* Two equal columns for larger screens */
  grid-template-areas: 
    "info contact"; /* Horizontal layout by default */
  gap: 20px;
  padding: 50px;
  background-color: #f4f4f9; /* Light background color */
}

/* Left Section: Fitness Information */
.info-box {
  grid-area: info; /* Assign to the 'info' area */
  background-color: #e7f9f7;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.info-box h2 {
  font-size: 24px;
  color: #1e3a8a;
  margin-bottom: 15px;
}

.info-box p {
  font-size: 16px;
  color: #333;
  margin-bottom: 15px;
}

.info-box ul {
  list-style-type: none;
  padding: 0;
}

.info-box li {
  font-size: 16px;
  margin: 5px 0;
  color: #555;
}

/* Right Section: Contact Us Form */
.contact-form-container {
  grid-area: contact; /* Assign to the 'contact' area */
  background-color: #fce4ec; /* Light pink background */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Light shadow */
}

.contact-form-container h2 {
  font-size: 24px;
  color: #d81b60;
  margin-bottom: 15px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: bold;
}

.contact-form input,
.contact-form textarea {
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
}

.contact-form textarea {
  resize: vertical;
  height: 100px;
}

.submit-button {
  background-color: #d81b60;
  color: white;
  border: none;
  padding: 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #ad1457;
}
/* Responsive Design */
@media (max-width: 768px) {
  .navbar {
  grid-template-columns: 1fr ;
}

.contact-section {
    grid-template-columns: 1fr;
    grid-template-areas: 
      "info" 
      "contact"; /*information on top and contact at the bottom */
    gap: 20px; /* Add spacing between items */
  }
  .service-cards {
    grid-template-columns: 1fr; 
  }
  .plan-row {
  grid-template-columns: 1fr;
  gap: 20px;
  justify-items: center;
  align-items: center;
}
  .card img {
    width: 100%; 
    height: auto; 
    margin: 0; 
  }

}
</style>