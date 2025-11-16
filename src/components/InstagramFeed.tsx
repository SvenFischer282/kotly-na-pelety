import { Instagram, Facebook } from "lucide-react";
import { Button } from "./ui/button";

const InstagramFeed = () => {
  // You can update these with actual Instagram post URLs from your account
  const instagramPosts = [
    {
      id: 1,
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/images/ig_post_1.png",
      link: "https://www.instagram.com/p/DQJZ-KriJIT",
    },
    {
      id: 2,
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/images/ig_post_1.png",
      link: "https://www.instagram.com/p/DQJZ-KriJIT",
    },
    {
      id: 3,
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/images/ig_post_1.png",
      link: "https://www.instagram.com/p/DQJZ-KriJIT",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Sledujte nás na sociálnych sieťach
          </h2>
          <p className="text-xl text-textSecondary mb-6">
            Pozrite si naše najnovšie inštalácie, tipy a novinky
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button asChild size="lg" className="gap-2">
              <a
                href="https://www.instagram.com/kotlynapelety.sk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </Button>
            <a
              href="https://www.facebook.com/profile.php?id=61582346150127"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="gap-2">
                <Facebook className="w-5 h-5" />
                Facebook
              </Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ aspectRatio: "9/16" }}
            >
              <img
                src={post.image}
                alt={`Instagram reel ${post.id}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
