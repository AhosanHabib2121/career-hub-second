import Banner from "../../components/banner/Banner";
import CategoryList from "../../components/categoryList/CategoryList";
import FeaturedJobs from "../../components/featuredjobs/FeaturedJobs";
    
const Home = () => {
    return (
        <div>
            {/* banner component */}
            <Banner></Banner>

            {/* job category list component */}
            <CategoryList></CategoryList>

            {/* featured component */}
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;