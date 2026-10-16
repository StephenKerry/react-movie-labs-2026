import PageTemplate from "../components/templateMoviePage";
import ReviewForm from "../components/reviewForm";
import { useLocation, Navigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const WriteReviewPage = () => {
  const location = useLocation();
  // Use optional chaining so it doesn't crash if location.state is null
  const movieId = location.state?.movieId;

  // If someone visits the URL directly without a movieId, redirect them home
  if (!movieId) {
    return <Navigate to="/" />;
  }

  const { data: movie, error, isLoading, isError } = useQuery({
    queryKey: ['movie', { id: movieId }],
    queryFn: getMovie,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <PageTemplate movie={movie}>
      <ReviewForm movie={movie} />
    </PageTemplate>
  );
};

export default WriteReviewPage;