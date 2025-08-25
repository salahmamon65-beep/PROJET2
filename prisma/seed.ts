import { PrismaClient, UserRole, OrderStatus, DeliveryMethod, CouponType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create users
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@techpro.ma' },
    update: {},
    create: {
      email: 'admin@techpro.ma',
      name: 'Admin User',
      role: UserRole.ADMIN,
    },
  });

  const cashierUser = await prisma.user.upsert({
    where: { email: 'cashier@techpro.ma' },
    update: {},
    create: {
      email: 'cashier@techpro.ma',
      name: 'Youssef Kassir',
      role: UserRole.CASHIER,
    },
  });

  const courierUser = await prisma.user.upsert({
    where: { email: 'courier@techpro.ma' },
    update: {},
    create: {
      email: 'courier@techpro.ma',
      name: 'Mohammed Livreur',
      role: UserRole.COURIER,
    },
  });

  // Create store
  const store = await prisma.store.upsert({
    where: { slug: 'techpro-restaurant' },
    update: {},
    create: {
      name: 'TechPro Restaurant',
      slug: 'techpro-restaurant',
      address: 'Avenue Mohammed V, Casablanca, Maroc',
      phone: '+212 522 123 456',
      email: 'contact@techpro.ma',
      openingHours: JSON.stringify({
        monday: { open: '09:00', close: '22:00' },
        tuesday: { open: '09:00', close: '22:00' },
        wednesday: { open: '09:00', close: '22:00' },
        thursday: { open: '09:00', close: '22:00' },
        friday: { open: '09:00', close: '23:00' },
        saturday: { open: '09:00', close: '23:00' },
        sunday: { open: '10:00', close: '22:00' },
      }),
      currency: 'MAD',
      taxRate: 0.2,
      deliveryFee: 15.0,
    },
  });

  // Create delivery zones
  const zones = await Promise.all([
    prisma.deliveryZone.create({
      data: {
        storeId: store.id,
        name: 'Centre-ville',
        minOrder: 50,
        fee: 10,
        eta: '20-30 min',
      },
    }),
    prisma.deliveryZone.create({
      data: {
        storeId: store.id,
        name: 'Maarif',
        minOrder: 80,
        fee: 15,
        eta: '30-45 min',
      },
    }),
    prisma.deliveryZone.create({
      data: {
        storeId: store.id,
        name: 'Ain Diab',
        minOrder: 100,
        fee: 20,
        eta: '45-60 min',
      },
    }),
  ]);

  // Create categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        storeId: store.id,
        name: 'Entrées / Hors-d\'œuvres',
        description: 'Délicieuses entrées pour commencer votre repas',
        position: 1,
        visible: true,
      },
    }),
    prisma.category.create({
      data: {
        storeId: store.id,
        name: 'Plats Principaux',
        description: 'Nos spécialités marocaines et internationales',
        position: 2,
        visible: true,
      },
    }),
    prisma.category.create({
      data: {
        storeId: store.id,
        name: 'Desserts',
        description: 'Douceurs traditionnelles et modernes',
        position: 3,
        visible: true,
      },
    }),
    prisma.category.create({
      data: {
        storeId: store.id,
        name: 'Boissons',
        description: 'Thés, cafés, jus frais et boissons chaudes',
        position: 4,
        visible: true,
      },
    }),
  ]);

  // Create products
  const products = await Promise.all([
    // Entrées
    prisma.product.create({
      data: {
        storeId: store.id,
        categoryId: categories[0].id,
        title: 'Salade Marocaine',
        description: 'Salade fraîche aux tomates, concombres, oignons et herbes',
        price: 35,
        compareAt: 45,
        sku: 'SAL001',
        stock: 50,
        images: JSON.stringify(['/images/salade-marocaine.jpg']),
        tags: 'végétarien,frais,salade',
        available: true,
      },
    }),
    prisma.product.create({
      data: {
        storeId: store.id,
        categoryId: categories[0].id,
        title: 'Briouates aux Crevettes',
        description: 'Délicieux feuilletés croustillants farcis aux crevettes',
        price: 65,
        sku: 'BRI001',
        stock: 30,
        images: JSON.stringify(['/images/briouates.jpg']),
        tags: 'fruits de mer,croustillant',
        available: true,
      },
    }),
    // Plats principaux
    prisma.product.create({
      data: {
        storeId: store.id,
        categoryId: categories[1].id,
        title: 'Tajine Agneau aux Pruneaux',
        description: 'Tajine traditionnel d\'agneau mijoté aux pruneaux et amandes',
        price: 120,
        compareAt: 140,
        sku: 'TAJ001',
        stock: 25,
        images: JSON.stringify(['/images/tajine-agneau.jpg']),
        tags: 'traditionnel,agneau,tajine',
        options: JSON.stringify({
          size: ['Normal', 'Grande portion (+20 MAD)'],
          spice: ['Doux', 'Épicé']
        }),
        available: true,
      },
    }),
    prisma.product.create({
      data: {
        storeId: store.id,
        categoryId: categories[1].id,
        title: 'Couscous Royal',
        description: 'Couscous aux sept légumes avec agneau, poulet et merguez',
        price: 95,
        sku: 'COU001',
        stock: 20,
        images: JSON.stringify(['/images/couscous-royal.jpg']),
        tags: 'couscous,royal,traditionnel',
        available: true,
      },
    }),
    // Desserts
    prisma.product.create({
      data: {
        storeId: store.id,
        categoryId: categories[2].id,
        title: 'Pâtisseries Marocaines',
        description: 'Assortiment de pâtisseries traditionnelles (chebakia, makroudh, gazelle)',
        price: 45,
        sku: 'PAT001',
        stock: 40,
        images: JSON.stringify(['/images/patisseries.jpg']),
        tags: 'traditionnel,sucré,assortiment',
        available: true,
      },
    }),
    // Boissons
    prisma.product.create({
      data: {
        storeId: store.id,
        categoryId: categories[3].id,
        title: 'Thé à la Menthe',
        description: 'Thé vert traditionnel à la menthe fraîche',
        price: 15,
        sku: 'THE001',
        stock: 100,
        images: JSON.stringify(['/images/the-menthe.jpg']),
        tags: 'thé,menthe,traditionnel,chaud',
        available: true,
      },
    }),
    prisma.product.create({
      data: {
        storeId: store.id,
        categoryId: categories[3].id,
        title: 'Jus d\'Orange Frais',
        description: 'Jus d\'orange pressé à la minute',
        price: 25,
        sku: 'JUS001',
        stock: 50,
        images: JSON.stringify(['/images/jus-orange.jpg']),
        tags: 'jus,orange,frais,vitamine',
        available: true,
      },
    }),
  ]);

  // Create clients
  const clients = await Promise.all([
    prisma.client.create({
      data: {
        storeId: store.id,
        name: 'Ahmed Benali',
        phone: '+212 661 234 567',
        email: 'ahmed.benali@email.com',
        address: 'Rue Al Massira, Casablanca',
        zoneId: zones[0].id,
      },
    }),
    prisma.client.create({
      data: {
        storeId: store.id,
        name: 'Fatima Zahra',
        phone: '+212 662 345 678',
        email: 'fatima.zahra@email.com',
        address: 'Boulevard Zerktouni, Casablanca',
        zoneId: zones[1].id,
      },
    }),
    prisma.client.create({
      data: {
        storeId: store.id,
        name: 'Youssef Alami',
        phone: '+212 663 456 789',
        address: 'Corniche Ain Diab, Casablanca',
        zoneId: zones[2].id,
      },
    }),
  ]);

  // Create orders with different statuses
  const orders = await Promise.all([
    // Pending order
    prisma.order.create({
      data: {
        storeId: store.id,
        clientId: clients[0].id,
        status: OrderStatus.PENDING,
        subtotal: 155,
        deliveryFee: 10,
        tax: 33,
        total: 198,
        notes: 'Pas trop épicé svp',
        deliveryMethod: DeliveryMethod.DELIVERY,
        zoneId: zones[0].id,
        items: {
          create: [
            {
              productId: products[2].id,
              title: 'Tajine Agneau aux Pruneaux',
              price: 120,
              qty: 1,
              options: JSON.stringify({ size: 'Normal', spice: 'Doux' }),
            },
            {
              productId: products[0].id,
              title: 'Salade Marocaine',
              price: 35,
              qty: 1,
            },
          ],
        },
      },
    }),
    // Preparing order
    prisma.order.create({
      data: {
        storeId: store.id,
        clientId: clients[1].id,
        status: OrderStatus.PREPARING,
        subtotal: 95,
        deliveryFee: 15,
        tax: 22,
        total: 132,
        deliveryMethod: DeliveryMethod.DELIVERY,
        zoneId: zones[1].id,
        items: {
          create: [
            {
              productId: products[3].id,
              title: 'Couscous Royal',
              price: 95,
              qty: 1,
            },
          ],
        },
      },
    }),
    // Delivered order
    prisma.order.create({
      data: {
        storeId: store.id,
        clientId: clients[2].id,
        status: OrderStatus.DELIVERED,
        subtotal: 85,
        deliveryFee: 20,
        tax: 21,
        total: 126,
        deliveryMethod: DeliveryMethod.DELIVERY,
        zoneId: zones[2].id,
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // Yesterday
        items: {
          create: [
            {
              productId: products[1].id,
              title: 'Briouates aux Crevettes',
              price: 65,
              qty: 1,
            },
            {
              productId: products[5].id,
              title: 'Thé à la Menthe',
              price: 15,
              qty: 1,
            },
            {
              productId: products[6].id,
              title: 'Jus d\'Orange Frais',
              price: 25,
              qty: 1,
            },
          ],
        },
      },
    }),
  ]);

  // Create coupons
  await Promise.all([
    prisma.coupon.create({
      data: {
        storeId: store.id,
        code: 'BIENVENUE10',
        type: CouponType.PERCENT,
        value: 10,
        startsAt: new Date(),
        endsAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        minOrder: 50,
        usageLimit: 100,
        usedCount: 5,
      },
    }),
    prisma.coupon.create({
      data: {
        storeId: store.id,
        code: 'LIVRAISON',
        type: CouponType.FIXED,
        value: 15,
        startsAt: new Date(),
        endsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
        minOrder: 100,
        usageLimit: 50,
        usedCount: 12,
      },
    }),
  ]);

  // Create campaign
  await prisma.campaign.create({
    data: {
      storeId: store.id,
      message: '🎉 Livraison gratuite pour toute commande supérieure à 150 MAD!',
      startsAt: new Date(),
      endsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days
      pages: JSON.stringify(['/', '/menu', '/checkout']),
    },
  });

  // Create blog posts
  await Promise.all([
    prisma.blogPost.create({
      data: {
        slug: 'art-culinaire-marocain',
        title: 'L\'Art Culinaire Marocain : Tradition et Modernité',
        excerpt: 'Découvrez les secrets de la cuisine marocaine et comment nous préservons les traditions tout en innovant.',
        content: `
          <p>La cuisine marocaine est un art qui se transmet de génération en génération. Chez TechPro Restaurant, nous honorons cette tradition tout en apportant une touche moderne à nos plats.</p>
          
          <h2>Les Épices : L'Âme de Notre Cuisine</h2>
          <p>Le secret de nos plats réside dans notre sélection minutieuse d'épices. Du ras el hanout au safran, chaque épice est choisie avec soin pour créer des saveurs authentiques.</p>
          
          <h2>Techniques Traditionnelles</h2>
          <p>Nos chefs maîtrisent les techniques ancestrales : cuisson lente dans le tajine, préparation du couscous à la vapeur, et l'art délicat de la pâtisserie marocaine.</p>
        `,
        publishedAt: new Date(),
        author: 'Chef Hassan Alami',
      },
    }),
    prisma.blogPost.create({
      data: {
        slug: 'bienfaits-the-menthe',
        title: 'Les Bienfaits du Thé à la Menthe',
        excerpt: 'Plus qu\'une simple boisson, le thé à la menthe est un véritable élixir de santé et de convivialité.',
        content: `
          <p>Le thé à la menthe n'est pas seulement la boisson nationale du Maroc, c'est aussi un concentré de bienfaits pour la santé.</p>
          
          <h2>Propriétés Digestives</h2>
          <p>La menthe fraîche aide à la digestion et apaise l'estomac après un repas copieux. C'est pourquoi nous le servons traditionnellement en fin de repas.</p>
          
          <h2>Antioxydants Naturels</h2>
          <p>Le thé vert contient des antioxydants puissants qui protègent l'organisme et renforcent le système immunitaire.</p>
        `,
        publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
        author: 'Dr. Amina Benali',
      },
    }),
    prisma.blogPost.create({
      data: {
        slug: 'ramadan-traditions-culinaires',
        title: 'Ramadan : Nos Traditions Culinaires',
        excerpt: 'Pendant le mois sacré du Ramadan, découvrez nos menus spéciaux et nos traditions culinaires.',
        content: `
          <p>Le mois de Ramadan est une période particulière où la cuisine marocaine prend une dimension encore plus spirituelle et conviviale.</p>
          
          <h2>L'Iftar Traditionnel</h2>
          <p>Nous préparons des menus spéciaux pour l'iftar avec des plats traditionnels : harira, chebakia, et dattes Medjool.</p>
          
          <h2>Partage et Convivialité</h2>
          <p>Nos tables d'iftar sont conçues pour rassembler les familles et créer des moments de partage authentiques.</p>
        `,
        publishedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
        author: 'Équipe TechPro',
      },
    }),
  ]);

  // Create newsletter subscribers
  await Promise.all([
    prisma.newsletterSubscriber.create({
      data: {
        email: 'subscriber1@email.com',
      },
    }),
    prisma.newsletterSubscriber.create({
      data: {
        email: 'subscriber2@email.com',
      },
    }),
  ]);

  console.log('Database seeded successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });