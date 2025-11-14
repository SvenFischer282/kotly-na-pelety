import { Instagram } from 'lucide-react';
import { Button } from './ui/button';

const InstagramFeed = () => {
  // You can update these with actual Instagram post URLs from your account
  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1487700160041-babef9c3cb55?w=400&h=400&fit=crop',
      link: 'https://www.instagram.com/kotlynapelety.sk',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop',
      link: 'https://www.instagram.com/kotlynapelety.sk',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=400&h=400&fit=crop',
      link: 'https://www.instagram.com/kotlynapelety.sk',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop',
      link: 'https://www.instagram.com/kotlynapelety.sk',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=400&fit=crop',
      link: 'https://www.instagram.com/kotlynapelety.sk',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=400&fit=crop',
      link: 'https://www.instagram.com/kotlynapelety.sk',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">Sledujte Nás na Instagrame</h2>
          </div>
          <p className="text-xl text-muted-foreground mb-6">
            Pozrite si naše najnovšie inštalácie, tipy a novinky
          </p>
          <Button
            asChild
            size="lg"
            className="gap-2"
          >
            <a
              href="https://www.instagram.com/kotlynapelety.sk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
              Sledovať @kotlynapelety.sk
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
