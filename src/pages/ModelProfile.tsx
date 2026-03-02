import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/profile.css';

interface ModelData {
  name: string;
  age: number;
  city: string;
  district: string;
  price: number;
  height: number;
  weight: number;
  views: number;
  bio: string;
  tags: string[];
  vip: boolean;
  measurements?: string;
  hours?: string;
  gallery?: string[];
}

const cityModels: Record<string, Record<string, ModelData>> = {
  sg: {
    'Mai Linh': {
      name: 'Mai Linh',
      age: 22,
      city: 'Hồ Chí Minh',
      district: 'Quận 1, TP.HCM',
      price: 16,
      height: 162,
      weight: 50,
      views: 185.4,
      bio: '"Bên ngoài ngọt ngào, nhưng bên trong em là một ẩn số. Em thích cùng anh xem phim và đi dạo trên biển lúc hoàng hôn."',
      tags: ['Nhiệt tình', 'Chiều chuộng', 'Đi ăn tối', 'Du lịch', 'Sự kiện'],
      vip: true,
      measurements: '88 – 62 – 90',
      hours: '6PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-gawAA6HhO?format=jpg&name=large'
      ]
    },
    'Thùy Tiên': {
      name: 'Thùy Tiên',
      age: 20,
      city: 'Hồ Chí Minh',
      district: 'Quận 3, TP.HCM',
      price: 15,
      height: 165,
      weight: 52,
      views: 172.1,
      bio: '"Đôi khi tôi yên tĩnh, đôi khi lại rất vui vẻ. Tôi thích nghe nhạc và khám phá các quán cà phê mới."',
      tags: ['Tính cảm', 'Lắng nghe', 'Đi ăn tối', 'Sự kiện'],
      vip: true,
      measurements: '85 – 60 – 88',
      hours: '7PM – 6AM',
      gallery: [
        'https://pbs.twimg.com/media/HCK-MlwaYAAi1lD?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK-MlsagAAnabz?format=jpg&name=medium',
        'https://pbs.twimg.com/media/HCK-Mlza8AAwHkD?format=jpg&name=medium',
        'https://pbs.twimg.com/media/HCK-MlpbUAAXWbq?format=jpg&name=medium'
      ]
    },
    'Hà Mỹ': {
      name: 'Hà Mỹ',
      age: 19,
      city: 'Hồ Chí Minh',
      district: 'Quận 10, TP.HCM',
      price: 13.5,
      height: 160,
      weight: 48,
      views: 165.3,
      bio: '"Tôi là một cô gái vui vẻ, luôn mang lại sự hài lòng cho mọi người xung quanh."',
      tags: ['Hài hước', 'Dễ thương', 'Năng động'],
      vip: true,
      measurements: '83 – 58 – 86',
      hours: '6PM – 4AM',
      gallery: [
        'https://pbs.twimg.com/media/HCK-V3VakAA1w36?format=jpg&name=medium',
        'https://pbs.twimg.com/media/HCK-V3ZaYAAtWPt?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK-V3bbMAA76K_?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK-V3TbcAAZ0No?format=jpg&name=large'
      ]
    },
    'Khánh Huyền': {
      name: 'Khánh Huyền',
      age: 23,
      city: 'Hồ Chí Minh',
      district: 'Bình Thạnh, TP.HCM',
      price: 13,
      height: 163,
      weight: 51,
      views: 158.9,
      bio: '"Em thích những buổi hẹn lãng mạn và đầy cảm xúc."',
      tags: ['Qua đêm', 'Lãng mạn'],
      vip: false,
      measurements: '84 – 59 – 87',
      hours: '7PM – 6AM',
      gallery: [
        'https://pbs.twimg.com/media/HCK-cgjacAAaftq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK-cgnbsAA-7wl?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK-cj4a4AABshX?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK-cgeaYAAg-1B?format=jpg&name=large'
      ]
    },
    'Mỹ Linh': {
      name: 'Mỹ Linh',
      age: 21,
      city: 'Hồ Chí Minh',
      district: 'Quận 7, TP.HCM',
      price: 11.5,
      height: 168,
      weight: 54,
      views: 149.8,
      bio: '"Em vui vẻ, năng động và luôn mang đến năng lượng tích cực."',
      tags: ['Vui vẻ', 'Năng động', 'Thân thiện'],
      vip: true,
      measurements: '86 – 61 – 89',
      hours: '6PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCK-kxHbAAEsvWD?format=jpg&name=medium',
        'https://pbs.twimg.com/media/HCK-kxKaUAAQK3T?format=jpg&name=medium  ',
        'https://pbs.twimg.com/media/HCK-kxGacAEbhKE?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK-kxEbUAEb6mB?format=jpg&name=medium'
      ]
    },
    'Phương Anh': {
      name: 'Phương Anh',
      age: 24,
      city: 'Hồ Chí Minh',
      district: 'Quận 2, TP.HCM',
      price: 8,
      height: 155,
      weight: 46,
      views: 145.2,
      bio: '"Em nhỏ nhắn, dễ thương và rất biết chiều chuộng."',
      tags: ['Chiều chuộng', 'Dễ thương'],
      vip: false,
      measurements: '80 – 56 – 83',
      hours: '8PM – 4AM',
      gallery: [
        'https://pbs.twimg.com/media/HCK-u7QaAAAnu2v?format=jpg&name=medium',
        'https://pbs.twimg.com/media/HCK-u7Qa8AEE_c6?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK-u7XagAAtFNI?format=jpg&name=medium',
        'https://pbs.twimg.com/media/HCK-u7WaUAEnB2l?format=jpg&name=large'
      ]
    },
    'Ngọc Trinh': {
      name: 'Ngọc Trinh',
      age: 22,
      city: 'Hồ Chí Minh',
      district: 'Phú Nhuận, TP.HCM',
      price: 12,
      height: 164,
      weight: 50,
      views: 141.1,
      bio: '"Em nhiệt tình, chu đáo và luôn để lại ấn tượng tốt đẹp."',
      tags: ['Nhiệt tình', 'Chu đáo', 'Sự kiện'],
      vip: true,
      measurements: '85 – 60 – 88',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCK_Ac_boAAcWPI?format=jpg&name=medium',
        'https://pbs.twimg.com/media/HCK_AdEbEAAXBdG?format=jpg&name=900x900',
        'https://pbs.twimg.com/media/HCK_AdFaQAEaVWy?format=jpg&name=900x900',
        'https://pbs.twimg.com/media/HCYyb1VbgAAxLKU?format=jpg&name=large'
      ]
    },
    'Bảo Châu': {
      name: 'Bảo Châu',
      age: 21,
      city: 'Hồ Chí Minh',
      district: 'Quận 5, TP.HCM',
      price: 14,
      height: 166,
      weight: 53,
      views: 138,
      bio: '"Em sang trọng, lịch sự và biết cách tạo ấn tượng sâu sắc."',
      tags: ['Sang trọng', 'Lịch sự'],
      vip: false,
      measurements: '86 – 61 – 89',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCK_oIuagAE2wi6?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK_oIzboAEw20G?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK_oIsa4AA2FP1?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK_oIta8AA1SfQ?format=jpg&name=large'
      ]
    },
    'Lan Anh': {
      name: 'Lan Anh',
      age: 23,
      city: 'Hồ Chí Minh',
      district: 'Gò Vấp, TP.HCM',
      price: 10,
      height: 158,
      weight: 47,
      views: 132,
      bio: '"Em thân thiện, dễ mến và luôn mang lại niềm vui cho mọi người."',
      tags: ['Thân thiện'],
      vip: false,
      measurements: '82 – 57 – 85',
      hours: '6PM – 4AM',
      gallery: [
        'https://pbs.twimg.com/media/HCK_4jkbQAA_EI8?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK_4jraoAAWthp?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK_4jbb0AAdqAA?format=jpg&name=medium',
        'https://pbs.twimg.com/media/HCK_4jdaMAIvVYE?format=jpg&name=medium'
      ]
    },
    'Thu Hà': {
      name: 'Thu Hà',
      age: 22,
      city: 'Hồ Chí Minh',
      district: 'Quận 1, TP.HCM',
      price: 14.5,
      height: 164,
      weight: 49,
      views: 168.2,
      bio: '"Em là một cô gái dễ thương, luôn sẵn sàng mang lại những khoảnh khắc đáng nhớ."',
      tags: ['Dễ thương', 'Nhiệt tình', 'Chiều chuộng'],
      vip: true,
      measurements: '85 – 60 – 88',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCLANcMa4AE36Yt?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCLANcNaAAEeOkJ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCLANcPaEAAFUu4?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCLANcQbMAECt8L?format=jpg&name=medium'
      ]
    },
    'Minh Thư': {
      name: 'Minh Thư',
      age: 20,
      city: 'Hồ Chí Minh',
      district: 'Quận 3, TP.HCM',
      price: 12,
      height: 161,
      weight: 48,
      views: 155.8,
      bio: '"Em trẻ, xinh đẹp và rất thích những cuộc hẹn lãng mạn và ấm áp."',
      tags: ['Trẻ trung', 'Lãng mạn', 'Dễ thương'],
      vip: true,
      measurements: '83 – 58 – 86',
      hours: '6PM – 4AM',
      gallery: [
        'https://pbs.twimg.com/media/HCLCyN8akAAJxD2?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCLCyN4b0AEg3OK?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCLCyKib0AEaymI?format=jpg&name=medium',
        'https://pbs.twimg.com/media/HCLCyKdakAISEel?format=jpg&name=large'
      ]
    },
    'Hồng Ngọc': {
      name: 'Hồng Ngọc',
      age: 21,
      city: 'Hồ Chí Minh',
      district: 'Quận 10, TP.HCM',
      price: 13,
      height: 162,
      weight: 50,
      views: 149.5,
      bio: '"Em quyến rũ, đầy sắc thái và biết cách khiến bạn cảm thấy đặc biệt."',
      tags: ['Quyến rũ', 'Chiều chuộng', 'Sự kiện'],
      vip: true,
      measurements: '84 – 59 – 87',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCK_NmSbIAAFXoE?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK_NpjbQAAsnOM?format=jpg&name=900x900',
        'https://pbs.twimg.com/media/HCK_NplaYAA5MID?format=jpg&name=medium',
        'https://pbs.twimg.com/media/HCK_NpracAAHiDA?format=jpg&name=medium'
      ]
    }
  },
  hn: {
    'Hồng Thắm': {
      name: 'Hồng Thắm',
      age: 21,
      city: 'Hà Nội',
      district: 'Hoàn Kiếm, Hà Nội',
      price: 15,
      height: 163,
      weight: 49,
      views: 178.2,
      bio: '"Em là một cô gái dịu dàng, thích lắng nghe và chia sẻ những khoảnh khắc đặc biệt."',
      tags: ['Dịu dàng', 'Lắng nghe', 'Lãng mạn', 'Du lịch'],
      vip: true,
      measurements: '86 – 61 – 89',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCXQeYlaAAAZlRl?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCXQeYlacAARNJM?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCXQeYqbAAA0Boq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCXQeYsboAA6d3m?format=jpg&name=large'
      ]
    },
    'Diệu Nhi': {
      name: 'Diệu Nhi',
      age: 23,
      city: 'Hà Nội',
      district: 'Ba Đình, Hà Nội',
      price: 14,
      height: 160,
      weight: 51,
      views: 164.5,
      bio: '"Tôi là người năng động, luôn mang năng lượng tích cực. Hãy để tôi làm cho ngày của bạn trở nên đặc biệt."',
      tags: ['Nhiệt tình', 'Vui vẻ', 'Năng động', 'Sự kiện'],
      vip: true,
      measurements: '84 – 59 – 87',
      hours: '6PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYKfzqawAEXa3Z?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYKfzybYAAuaZY?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYKfzracAAMCeT?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYKfznbMAA88zm?format=jpg&name=4096x4096'
      ]
    },
    'Ngọc Thảo': {
      name: 'Ngọc Thảo',
      age: 19,
      city: 'Hà Nội',
      district: 'Cầu Giấy, Hà Nội',
      price: 12,
      height: 165,
      weight: 47,
      views: 158.1,
      bio: '"Tôi trẻ, xinh đẹp và luôn sẵn sàng chiều chuộng người mình yêu quý."',
      tags: ['Chiều chuộng', 'Dễ thương', 'Trẻ trung'],
      vip: true,
      measurements: '82 – 58 – 85',
      hours: '8PM – 6AM',
      gallery: [
        'https://pbs.twimg.com/media/HCXQ8pKb0AAjRnD?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCXQ8pHbEAAJAdn?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCXQ8pJbgAApCam?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCXQ8pMakAAxSSG?format=jpg&name=4096x4096'
      ]
    },
    'Thanh Hà': {
      name: 'Thanh Hà',
      age: 22,
      city: 'Hà Nội',
      district: 'Hoàn Kiếm, Hà Nội',
      price: 14,
      height: 163,
      weight: 50,
      views: 162.4,
      bio: '"Em dịu dàng, biết cách chăm sóc và mang lại sự thoải mái cho bạn."',
      tags: ['Dịu dàng', 'Tình cảm', 'Chiều chuộng'],
      vip: true,
      measurements: '85 – 60 – 88',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCXQeYlaAAAZlRl?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCXREcNaIAARjf0?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXREcebAAA898a?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXREcYbMAAsQLy?format=jpg&name=4096x4096'
      ]
    },
    'Bích Phương': {
      name: 'Bích Phương',
      age: 23,
      city: 'Hà Nội',
      district: 'Ba Đình, Hà Nội',
      price: 15,
      height: 166,
      weight: 52,
      views: 171.3,
      bio: '"Em sang trọng, quyến rũ và luôn biết cách tạo ấn tượng đầu tiên tuyệt vời."',
      tags: ['Sang trọng', 'Quyến rũ', 'Sự kiện'],
      vip: true,
      measurements: '86 – 61 – 89',
      hours: '7PM – 6AM',
      gallery: [
        'https://pbs.twimg.com/media/HCXd4N9bIAAvMuP?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXd4OXbkAAq4G1?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXd4N7aAAEZRcx?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXd4N-acAIVVoo?format=jpg&name=4096x4096'
      ]
    },
    'Quỳnh Anh': {
      name: 'Quỳnh Anh',
      age: 21,
      city: 'Hà Nội',
      district: 'Cầu Giấy, Hà Nội',
      price: 13,
      height: 162,
      weight: 49,
      views: 155.7,
      bio: '"Em vui vẻ, năng động và luôn mang lại những khoảnh khắc vui tươi."',
      tags: ['Vui vẻ', 'Năng động', 'Thân thiện'],
      vip: false,
      measurements: '84 – 59 – 87',
      hours: '6PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCXeJMpa4AA5h_1?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXeJM0bgAAB67g?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXeJM4bwAAjWvm?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXeJMza8AA7I3P?format=jpg&name=4096x4096'
      ]
    },
    'Trà My': {
      name: 'Trà My',
      age: 20,
      city: 'Hà Nội',
      district: 'Hoàn Kiếm, Hà Nội',
      price: 11.5,
      height: 160,
      weight: 47,
      views: 148.2,
      bio: '"Em trẻ, xinh đẹp với vẻ dịu dàng và tình cảm sâu sắc."',
      tags: ['Dịu dàng', 'Tình cảm', 'Lãng mạn'],
      vip: true,
      measurements: '83 – 58 – 86',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCXeRBXbMAEH_nT?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXeRBbbwAAFDlr?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXeRBeaoAAjFTH?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXeRBfbYAAuEX7?format=jpg&name=4096x4096'
      ]
    },
    'Hải Yến': {
      name: 'Hải Yến',
      age: 24,
      city: 'Hà Nội',
      district: 'Ba Đình, Hà Nội',
      price: 16,
      height: 167,
      weight: 53,
      views: 175.1,
      bio: '"Em là một cô gái chín chắn, biết cách chăm sóc và tạo cảm giác an toàn cho bạn."',
      tags: ['Chín chắn', 'Tình cảm', 'Lãng mạn'],
      vip: true,
      measurements: '87 – 62 – 90',
      hours: '7PM – 6AM',
      gallery: [
        'https://pbs.twimg.com/media/HCXeaKkbYAArNz6?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXeaLmbQAAjSVC?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXeaKkaoAAkdMv?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXeaKkaIAAhRMj?format=jpg&name=large'
      ]
    },
    'Vân Anh': {
      name: 'Vân Anh',
      age: 22,
      city: 'Hà Nội',
      district: 'Cầu Giấy, Hà Nội',
      price: 13.5,
      height: 164,
      weight: 50,
      views: 159.8,
      bio: '"Em yêu thích những buổi hẹn lãng mạn và các hoạt động ngoài trời."',
      tags: ['Lãng mạn', 'Năng động', 'Du lịch'],
      vip: true,
      measurements: '85 – 60 – 88',
      hours: '6PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCXeiHWagAAUQXJ?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXeiHYbQAAf8ec?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXeiHca4AAVtbh?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXeiHWbcAAPZ05?format=jpg&name=4096x4096'
      ]
    },
    'Phương Linh': {
      name: 'Phương Linh',
      age: 21,
      city: 'Hà Nội',
      district: 'Hoàn Kiếm, Hà Nội',
      price: 12.5,
      height: 161,
      weight: 49,
      views: 151.4,
      bio: '"Em dễ thương, luôn mang lại sự tươi sáng và vui vẻ cho những ai xung quanh."',
      tags: ['Dễ thương', 'Vui vẻ', 'Thân thiện'],
      vip: true,
      measurements: '84 – 59 – 87',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCXeuk7awAAGFtJ?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXeuk_bAAAhHcr?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXeulDasAAx_k9?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXeulFbYAAAwVc?format=jpg&name=4096x4096'
      ]
    },
    'Thúy Nga': {
      name: 'Thúy Nga',
      age: 23,
      city: 'Hà Nội',
      district: 'Ba Đình, Hà Nội',
      price: 14.5,
      height: 165,
      weight: 51,
      views: 163.6,
      bio: '"Em là một cô gái tính cảm, biết cách lắng nghe và chia sẻ những cảm xúc chân thành."',
      tags: ['Tính cảm', 'Lắng nghe', 'Lãng mạn'],
      vip: true,
      measurements: '86 – 61 – 89',
      hours: '7PM – 6AM',
      gallery: [
        'https://pbs.twimg.com/media/HCXe1IpacAAex_N?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXe1IsagAA7UIz?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXe1IraIAAdcg0?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCXe1IoboAAY1MT?format=jpg&name=4096x4096'
      ]
    },
    'Mỹ Duyên': {
      name: 'Mỹ Duyên',
      age: 20,
      city: 'Hà Nội',
      district: 'Cầu Giấy, Hà Nội',
      price: 11,
      height: 159,
      weight: 47,
      views: 144.9,
      bio: '"Em trẻ, xinh đẹp và rất thích những cuộc phiêu lưu mới mẻ."',
      tags: ['Trẻ trung', 'Năng động', 'Dễ thương'],
      vip: false,
      measurements: '82 – 57 – 85',
      hours: '8PM – 4AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYU9Qia4AE7t3r?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYU9RkawAAJ1Oa?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYU9QuacAALG3K?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYU9QoawAAQbCt?format=jpg&name=4096x4096'
      ]
    }
  },
  dn: {
    'Hoài Thương': {
      name: 'Hoài Thương',
      age: 20,
      city: 'Đà Nẵng',
      district: 'Hải Châu, Đà Nẵng',
      price: 13,
      height: 161,
      weight: 48,
      views: 162.3,
      bio: '"Em là một cô gái vui vẻ, yêu thích các hoạt động ngoài trời và những trải nghiệm mới mẻ."',
      tags: ['Vui vẻ', 'Năng động', 'Du lịch', 'Ngoài trời'],
      vip: true,
      measurements: '85 – 60 – 88',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYLoKGaUAAT6A7?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCYLoJ6bIAAHKCy?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCZB-AqbUAE7ehF?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCYLoJ7bkAECELg?format=jpg&name=medium'
      ]
    },
    'Cẩm Ly': {
      name: 'Cẩm Ly',
      age: 22,
      city: 'Đà Nẵng',
      district: 'Thanh Khê, Đà Nẵng',
      price: 11,
      height: 164,
      weight: 52,
      views: 151.8,
      bio: '"Tôi thích chiều chuộng và tạo ra những khoảnh khắc lãng mạn và ấm áp."',
      tags: ['Chiều chuộng', 'Lãng mạn', 'Tình cảm'],
      vip: true,
      measurements: '86 – 61 – 89',
      hours: '6PM – 4AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYL8goakAEdzSB?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYL8guaoAEMuI6?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYL8gtakAAb977?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYL8gobUAAR97n?format=jpg&name=4096x4096'
      ]
    },
    'Thiên Kim': {
      name: 'Thiên Kim',
      age: 25,
      city: 'Đà Nẵng',
      district: 'Sơn Trà, Đà Nẵng',
      price: 15,
      height: 158,
      weight: 50,
      views: 144.2,
      bio: '"Tôi là một cô gái sang trọng và tinh tế, biết cách tạo ấn tượng sâu sắc."',
      tags: ['Sang trọng', 'Tinh tế', 'Lãng mạn'],
      vip: true,
      measurements: '87 – 62 – 90',
      hours: '8PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYMKKcaIAAF6LI?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYMKKgb0AABaZz?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYMKKdbEAAFtaw?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYMKQdaMAAcGb4?format=jpg&name=4096x4096'
      ]
    },
    'Bảo Ngọc': {
      name: 'Bảo Ngọc',
      age: 22,
      city: 'Đà Nẵng',
      district: 'Hải Châu, Đà Nẵng',
      price: 13.5,
      height: 162,
      weight: 50,
      views: 157.2,
      bio: '"Em dễ thương, nhiệt tình và luôn sẵn sàng mang lại sự hài lòng cho bạn."',
      tags: ['Dễ thương', 'Nhiệt tình', 'Chiều chuộng'],
      vip: true,
      measurements: '85 – 60 – 88',
      hours: '6PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYMSd3acAAZGA6?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCYMSeAbcAAlA03?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCYMSd9aUAA1acq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCYMSeObwAAl1ji?format=jpg&name=large'
      ]
    },
    'Yến Nhi': {
      name: 'Yến Nhi',
      age: 21,
      city: 'Đà Nẵng',
      district: 'Thanh Khê, Đà Nẵng',
      price: 12,
      height: 161,
      weight: 48,
      views: 149.6,
      bio: '"Em vui vẻ, năng động và thích những trải nghiệm ngoài trời."',
      tags: ['Vui vẻ', 'Năng động', 'Ngoài trời'],
      vip: false,
      measurements: '83 – 58 – 86',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYMcR7bcAAL7R3?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYMcR9aoAAzVzf?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYMcR8bwAAmW61?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYMcR7bAAAMZ5P?format=jpg&name=4096x4096'
      ]
    },
    'Khánh Phương': {
      name: 'Khánh Phương',
      age: 23,
      city: 'Đà Nẵng',
      district: 'Sơn Trà, Đà Nẵng',
      price: 14,
      height: 164,
      weight: 51,
      views: 161.3,
      bio: '"Em thanh lịch, tính cảm và biết cách tạo ra những khoảnh khắc lãng mạn."',
      tags: ['Thanh lịch', 'Tính cảm', 'Lãng mạn'],
      vip: true,
      measurements: '86 – 61 – 89',
      hours: '7PM – 6AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYM5ouaYAAbNJp?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYM5olacAA0sUq?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYM5orbwAAloxu?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYM5osaIAAtEgS?format=jpg&name=4096x4096'
      ]
    },
    'Hà Phương': {
      name: 'Hà Phương',
      age: 24,
      city: 'Đà Nẵng',
      district: 'Hải Châu, Đà Nẵng',
      price: 15.5,
      height: 166,
      weight: 53,
      views: 168.9,
      bio: '"Em chín chắn, sang trọng và biết cách chăm sóc bạn một cách chu đáo."',
      tags: ['Chín chắn', 'Sang trọng', 'Chu đáo'],
      vip: true,
      measurements: '87 – 62 – 90',
      hours: '7PM – 6AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYUeTYawAA7GrR?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYUeT3bUAANY6N?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYUeTabEAAiAHN?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYUeTXbQAAviJV?format=jpg&name=4096x4096'
      ]
    },
    'Kim Ngân': {
      name: 'Kim Ngân',
      age: 20,
      city: 'Đà Nẵng',
      district: 'Thanh Khê, Đà Nẵng',
      price: 11.5,
      height: 160,
      weight: 47,
      views: 143.7,
      bio: '"Em trẻ, xinh đẹp và rất thích các hoạt động vui vẻ."',
      tags: ['Trẻ trung', 'Dễ thương', 'Vui vẻ'],
      vip: true,
      measurements: '82 – 57 – 85',
      hours: '8PM – 4AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYNL5JaQAAXv1P?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYNL5KbsAArOEy?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYNL5LakAAegKx?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYNL5EaQAAEvxC?format=jpg&name=4096x4096'
      ]
    },
    'Tuyết Mai': {
      name: 'Tuyết Mai',
      age: 25,
      city: 'Đà Nẵng',
      district: 'Sơn Trà, Đà Nẵng',
      price: 16.5,
      height: 168,
      weight: 54,
      views: 176.4,
      bio: '"Em là một cô gái chín chắn, sang trọng và biết cách tạo cảm giác an toàn tuyệt vời."',
      tags: ['Chín chắn', 'Sang trọng', 'Lãng mạn'],
      vip: true,
      measurements: '88 – 63 – 91',
      hours: '8PM – 6AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYNh6XaMAAZV-3?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYNh6WaUAAwblb?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYNh6RbgAAQyHI?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCYNh6cbMAAqnda?format=jpg&name=4096x4096'
      ]
    },
    'Linh Chi': {
      name: 'Linh Chi',
      age: 22,
      city: 'Đà Nẵng',
      district: 'Hải Châu, Đà Nẵng',
      price: 13,
      height: 163,
      weight: 49,
      views: 150.8,
      bio: '"Em dịu dàng, tính cảm và luôn mang lại những cảm xúc chân thành."',
      tags: ['Dịu dàng', 'Tính cảm', 'Chiều chuộng'],
      vip: true,
      measurements: '84 – 59 – 87',
      hours: '6PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYNrFIakAEumEb?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCYNrFFb0AALn29?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCYNrFNbQAAPtJp?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCYVR6GaoAA5lAl?format=jpg&name=large'
      ]
    },
    'Nhã Uyên': {
      name: 'Nhã Uyên',
      age: 21,
      city: 'Đà Nẵng',
      district: 'Thanh Khê, Đà Nẵng',
      price: 12.5,
      height: 162,
      weight: 48,
      views: 147.2,
      bio: '"Em yêu thích thời trang, làm đẹp và luôn muốn trở nên ấn tượng nhất."',
      tags: ['Thời trang', 'Thẩm mỹ', 'Tự tin'],
      vip: false,
      measurements: '84 – 59 – 87',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYL8goakAEdzSB?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    },
    'Phúc An': {
      name: 'Phúc An',
      age: 23,
      city: 'Đà Nẵng',
      district: 'Sơn Trà, Đà Nẵng',
      price: 14.5,
      height: 165,
      weight: 51,
      views: 162.5,
      bio: '"Em là một cô gái tĩnh tại, chu đáo và biết cách chăm sóc người mình yêu."',
      tags: ['Tĩnh tại', 'Chu đáo', 'Tình cảm'],
      vip: true,
      measurements: '86 – 61 – 89',
      hours: '7PM – 6AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYMKKcaIAAF6LI?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    }
  },
  nt: {
    'Ngọc Hân': {
      name: 'Ngọc Hân',
      age: 23,
      city: 'Nha Trang',
      district: 'Lộc Thọ, Nha Trang',
      price: 14,
      height: 165,
      weight: 51,
      views: 171.5,
      bio: '"Em là một cô gái lãng mạn, thích những điều nhỏ nhặt có ý nghĩa trong cuộc sống."',
      tags: ['Lãng mạn', 'Chiều chuộng', 'Tình cảm', 'Du lịch'],
      vip: true,
      measurements: '85 – 60 – 88',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYOQW6bYAAm6og?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    },
    'Hương Giang': {
      name: 'Hương Giang',
      age: 19,
      city: 'Nha Trang',
      district: 'Phương Sài, Nha Trang',
      price: 10,
      height: 160,
      weight: 48,
      views: 159.3,
      bio: '"Tôi trẻ, năng động và luôn tìm kiếm những trải nghiệm mới mẻ cùng bạn."',
      tags: ['Vui vẻ', 'Năng động', 'Trẻ trung', 'Ngoài trời'],
      vip: true,
      measurements: '83 – 58 – 86',
      hours: '6PM – 4AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYOXwnaoAAT397?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    },
    'Thảo Nguyên': {
      name: 'Thảo Nguyên',
      age: 21,
      city: 'Nha Trang',
      district: 'Phương Sơn, Nha Trang',
      price: 12,
      height: 163,
      weight: 50,
      views: 148.7,
      bio: '"Tôi nhẹ nhàng, dịu dàng và biết cách chăm sóc người mình quan tâm."',
      tags: ['Nhẹ nhàng', 'Dịu dàng', 'Tình cảm'],
      vip: true,
      measurements: '84 – 59 – 87',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYOmMYbkAABZzR?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    },
    'Minh Châu': {
      name: 'Minh Châu',
      age: 22,
      city: 'Nha Trang',
      district: 'Lộc Thọ, Nha Trang',
      price: 13.5,
      height: 163,
      weight: 49,
      views: 154.3,
      bio: '"Em dễ thương, nhiệt tình và luôn sẵn sàng mang lại những khoảnh khắc đáng nhớ."',
      tags: ['Dễ thương', 'Nhiệt tình', 'Chiều chuộng'],
      vip: true,
      measurements: '85 – 60 – 88',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYOQW6bYAAm6og?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    },
    'Lan Phương': {
      name: 'Lan Phương',
      age: 24,
      city: 'Nha Trang',
      district: 'Phương Sài, Nha Trang',
      price: 15,
      height: 166,
      weight: 52,
      views: 170.2,
      bio: '"Em chín chắn, sang trọng và biết cách tạo ấn tượng sâu sắc cho mọi người."',
      tags: ['Chín chắn', 'Sang trọng', 'Lãng mạn'],
      vip: true,
      measurements: '86 – 61 – 89',
      hours: '7PM – 6AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYOXwnaoAAT397?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    },
    'Nhã Di': {
      name: 'Nhã Di',
      age: 20,
      city: 'Nha Trang',
      district: 'Lộc Thọ, Nha Trang',
      price: 11,
      height: 160,
      weight: 47,
      views: 141.5,
      bio: '"Em trẻ, xinh đẹp và rất yêu thích những trải nghiệm mới mẻ."',
      tags: ['Trẻ trung', 'Năng động', 'Dễ thương'],
      vip: false,
      measurements: '82 – 57 – 85',
      hours: '8PM – 4AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYOQXwnaoAAT397?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    },
    'Quỳnh Như': {
      name: 'Quỳnh Như',
      age: 23,
      city: 'Nha Trang',
      district: 'Phương Sơn, Nha Trang',
      price: 14,
      height: 164,
      weight: 50,
      views: 159.7,
      bio: '"Em dịu dàng, tính cảm và biết cách mang lại sự yên bình cho bạn."',
      tags: ['Dịu dàng', 'Tính cảm', 'Lãng mạn'],
      vip: true,
      measurements: '85 – 60 – 88',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYOmMYbkAABZzR?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    },
    'Hồng Loan': {
      name: 'Hồng Loan',
      age: 21,
      city: 'Nha Trang',
      district: 'Lộc Thọ, Nha Trang',
      price: 12.5,
      height: 162,
      weight: 49,
      views: 150.4,
      bio: '"Em vui vẻ, năng động và luôn mang lại những khoảnh khắc vui tươi."',
      tags: ['Vui vẻ', 'Năng động', 'Thân thiện'],
      vip: true,
      measurements: '84 – 59 – 87',
      hours: '6PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYOQW6bYAAm6og?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    },
    'Bảo Trân': {
      name: 'Bảo Trân',
      age: 25,
      city: 'Nha Trang',
      district: 'Phương Sài, Nha Trang',
      price: 16,
      height: 167,
      weight: 53,
      views: 174.6,
      bio: '"Em là một cô gái chín chắn, biết cách chăm sóc và tạo cảm giác an toàn tuyệt vời."',
      tags: ['Chín chắn', 'Chu đáo', 'Lãng mạn'],
      vip: true,
      measurements: '87 – 62 – 90',
      hours: '7PM – 6AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYOXwnaoAAT397?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    },
    'Ánh Nguyệt': {
      name: 'Ánh Nguyệt',
      age: 22,
      city: 'Nha Trang',
      district: 'Phương Sơn, Nha Trang',
      price: 13,
      height: 161,
      weight: 48,
      views: 146.9,
      bio: '"Em lãng mạn, tính cảm và yêu thích những buổi tối duyên dáng."',
      tags: ['Lãng mạn', 'Tính cảm', 'Chiều chuộng'],
      vip: true,
      measurements: '83 – 58 – 86',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYOmMYbkAABZzR?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    },
    'Kim Anh': {
      name: 'Kim Anh',
      age: 20,
      city: 'Nha Trang',
      district: 'Lộc Thọ, Nha Trang',
      price: 10.5,
      height: 159,
      weight: 46,
      views: 138.2,
      bio: '"Em trẻ, xinh đẹp và rất thích các hoạt động vui vẻ ngoài trời."',
      tags: ['Trẻ trung', 'Dễ thương', 'Năng động'],
      vip: false,
      measurements: '81 – 56 – 84',
      hours: '8PM – 4AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYOQXwnaoAAT397?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    },
    'Thùy Dương': {
      name: 'Thùy Dương',
      age: 23,
      city: 'Nha Trang',
      district: 'Phương Sài, Nha Trang',
      price: 14.5,
      height: 165,
      weight: 51,
      views: 163.8,
      bio: '"Em thanh lịch, tính cảm và luôn biết cách tạo ra những khoảnh khắc lãng mạn."',
      tags: ['Thanh lịch', 'Tính cảm', 'Lãng mạn'],
      vip: true,
      measurements: '86 – 61 – 89',
      hours: '7PM – 6AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYOXwnaoAAT397?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    }
  }
};

export default function ModelProfile() {
  const [model, setModel] = useState<ModelData | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);
  const [city, setCity] = useState<string | null>(null);
  const [modelName, setModelName] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let cityParam = params.get('city');
    let nameParam = params.get('name');

    if (!cityParam || !nameParam) {
      cityParam = 'sg';
      nameParam = 'Mai Linh';
    }

    setCity(cityParam);
    setModelName(nameParam);

    if (cityParam && nameParam && cityModels[cityParam]?.[nameParam]) {
      setModel(cityModels[cityParam][nameParam]);
    }
  }, []);

  useEffect(() => {
    const videoSlider = document.getElementById('video-slider');
    if (!videoSlider) return;

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;
    let velocity = 0;
    let lastX = 0;
    let lastTime = 0;
    let animationId: number | null = null;
    let hasMoved = false;

    const stopAnimation = () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    };

    const applyMomentum = () => {
      stopAnimation();
      const friction = 0.92;
      let vel = velocity * 0.8;

      const animate = () => {
        if (Math.abs(vel) < 0.1) {
          velocity = 0;
          const slideWidth = videoSlider.offsetWidth;
          const targetSlide = Math.round(-parseInt(videoSlider.style.transform.replace(/[^0-9-]/g, '') || '0') / slideWidth);
          const clampedSlide = Math.max(0, Math.min(targetSlide, totalVideoSlides - 1));
          setCurrentVideoSlide(clampedSlide);
          return;
        }

        vel *= friction;
        const currentTransform = parseInt(videoSlider.style.transform.replace(/[^0-9-]/g, '') || '0');
        const newTransform = currentTransform + vel;
        videoSlider.style.transform = `translateX(${newTransform}px)`;

        animationId = requestAnimationFrame(animate);
      };

      if (Math.abs(vel) > 0.1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    const getClientX = (e: MouseEvent | TouchEvent) => {
      return 'touches' in e ? e.touches[0].clientX : e.clientX;
    };

    const handleStart = (e: MouseEvent | TouchEvent) => {
      stopAnimation();
      isDragging = true;
      hasMoved = false;
      velocity = 0;

      const clientX = getClientX(e);
      startX = clientX;
      lastX = clientX;
      scrollLeft = parseInt(videoSlider.style.transform.replace(/[^0-9-]/g, '') || '0');
      lastTime = performance.now();

      videoSlider.style.cursor = 'grabbing';
      videoSlider.style.transition = 'none';
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;

      const clientX = getClientX(e);
      const now = performance.now();
      const deltaTime = Math.max(now - lastTime, 1);
      const deltaX = clientX - lastX;

      if (Math.abs(clientX - startX) > 3) {
        hasMoved = true;
        if (e.cancelable) {
          e.preventDefault();
        }
      }

      velocity = (deltaX / deltaTime) * 10;
      lastX = clientX;
      lastTime = now;

      const walk = clientX - startX;
      const newTransform = scrollLeft + walk;
      const maxTransform = -(videoSlider.offsetWidth * (totalVideoSlides - 1));
      const clampedTransform = Math.max(maxTransform, Math.min(0, newTransform));

      videoSlider.style.transform = `translateX(${clampedTransform}px)`;
    };

    const handleEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      videoSlider.style.cursor = 'grab';

      if (hasMoved) {
        applyMomentum();
      }
    };

    videoSlider.addEventListener('mousedown', handleStart);
    videoSlider.addEventListener('touchstart', handleStart, { passive: true });

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, { passive: false });

    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchend', handleEnd);

    videoSlider.addEventListener('mouseleave', handleEnd);

    videoSlider.style.cursor = 'grab';

    return () => {
      stopAnimation();
      videoSlider.removeEventListener('mousedown', handleStart);
      videoSlider.removeEventListener('touchstart', handleStart);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchend', handleEnd);
      videoSlider.removeEventListener('mouseleave', handleEnd);
    };
  }, []);

  if (!model) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#060606', color: '#f0ebe3' }}>
        <div>Loading...</div>
      </div>
    );
  }

  const totalSlides = 4;

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const totalVideoSlides = 5;

  const handlePrevVideoSlide = () => {
    setCurrentVideoSlide((prev) => (prev - 1 + totalVideoSlides) % totalVideoSlides);
  };

  const handleNextVideoSlide = () => {
    setCurrentVideoSlide((prev) => (prev + 1) % totalVideoSlides);
  };

  const goToVideoSlide = (index: number) => {
    setCurrentVideoSlide(index);
  };

  const getOtherModels = () => {
    if (!city) return [];
    const allModels = Object.values(cityModels[city] || {});
    return allModels.filter(m => m.name !== model?.name).slice(0, 6);
  };

  const otherModels = getOtherModels();

  const scrollToCity = (cityId: string) => {
    window.location.href = `/#${cityId}`;
  };

  return (
    <div style={{ background: '#060606', color: '#f0ebe3', minHeight: '100vh' }}>
      <nav className="profile-nav">
        <a href="/" className="profile-logo">Lux<span>Date</span></a>

        <div className="profile-nav-cities">
          <button className="profile-city-pill" onClick={() => scrollToCity('saigon')}>
            Sài Gòn
          </button>
          <button className="profile-city-pill" onClick={() => scrollToCity('hanoi')}>
            Hà Nội
          </button>
          <button className="profile-city-pill" onClick={() => scrollToCity('danang')}>
            Đà Nẵng
          </button>
          <button className="profile-city-pill" onClick={() => scrollToCity('nhatrang')}>
            Nha Trang
          </button>
        </div>

        <div className="profile-nav-right">
          <a href="tel:0776943965" className="profile-nav-phone">
            ☎ 0776 943 965
          </a>
          <button
            className="profile-nav-cta"
            onClick={() => window.open('https://t.me/hoahong8388', '_blank')}
          >
            Đặt lịch
          </button>
        </div>
      </nav>

      <section className="profile-hero">
        <div className="profile-gallery-wrap">
          <div className="profile-gallery-main">
            <div className="profile-gallery-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {model?.gallery && model.gallery.length > 0 ? (
                model.gallery.map((image, index) => (
                  <div key={index} className="profile-gallery-slide">
                    <img
                      src={image}
                      alt={`${model.name} - Photo ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                ))
              ) : (
                [1, 2, 3, 4].map((num) => (
                  <div key={num} className="profile-gallery-slide">
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(135deg, #1c${String(num * 5).padStart(2, '0')}10, #0d0d0d)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '5rem',
                        color: 'rgba(201, 169, 110, 0.12)'
                      }}>
                        {String(num).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            <button className="profile-gallery-btn profile-gallery-prev" onClick={handlePrevSlide}>
              <ChevronLeft size={18} />
            </button>
            <button className="profile-gallery-btn profile-gallery-next" onClick={handleNextSlide}>
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="profile-gallery-dots">
            {(model?.gallery && model.gallery.length > 0 ? model.gallery : [1, 2, 3, 4]).map((image, index) => (
              <div
                key={index}
                className={`profile-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                style={{
                  backgroundImage: typeof image === 'string' ? `url(${image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            ))}
          </div>

          <div className="profile-photo-count">
            {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </div>
        </div>

        <div className="profile-info-panel">
          <div className="profile-model-tag">
            {model.vip ? 'PREMIUM MODEL' : 'MODEL'} · {model.city.toUpperCase()}
          </div>

          <h1 className="profile-model-name">
            {model.name.split(' ')[0]} <em>{model.name.split(' ')[1]}</em>
          </h1>
          <p className="profile-model-age">{model.age} tuổi · {model.district}</p>

          <p className="profile-model-bio">{model.bio}</p>

          <div className="profile-stats-grid">
            <div className="profile-stat-cell">
              <span className="profile-stat-label">CHIỀU CAO</span>
              <span className="profile-stat-value">{model.height} cm</span>
            </div>
            <div className="profile-stat-cell">
              <span className="profile-stat-label">CÂN NẶNG</span>
              <span className="profile-stat-value">{model.weight} kg</span>
            </div>
            <div className="profile-stat-cell">
              <span className="profile-stat-label">SỐ ĐO</span>
              <span className="profile-stat-value">{model.measurements}</span>
            </div>
            <div className="profile-stat-cell profile-stat-highlight">
              <span className="profile-stat-label">GIÁ / BUỔI</span>
              <span className="profile-stat-value">{model.price}.000.000₫</span>
            </div>
            <div className="profile-stat-cell">
              <span className="profile-stat-label">GIỜ LÀM VIỆC</span>
              <span className="profile-stat-value">{model.hours}</span>
            </div>
            <div className="profile-stat-cell">
              <span className="profile-stat-label">LƯỢT XEM</span>
              <span className="profile-stat-value">{model.views}k</span>
            </div>
          </div>

          <div className="profile-services-wrap">
            <div className="profile-services-label">DỊCH VỤ</div>
            <div className="profile-services-list">
              {model.tags.map((tag, index) => (
                <span key={index} className="profile-service-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="profile-cta-row">
            <button className="profile-btn-primary">Đặt lịch ngay</button>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <div className="profile-section-header">
          <h2 className="profile-section-title">Video <em>Giới thiệu</em></h2>
          <div className="profile-section-line" />
        </div>

        <div className="profile-video-slider-wrap">
          <div
            id="video-slider"
            className="profile-video-slider"
            style={{ transform: `translateX(-${currentVideoSlide * 100}%)` }}
          >
            {[
              { label: 'Video chính', duration: '2:34' },
              { label: 'Cuộc sống hàng ngày', duration: '1:18' },
              { label: 'Buổi tối lãng mạn', duration: '0:58' },
              { label: 'Vlog du lịch', duration: '3:12' },
              { label: 'Khoảnh khắc đặc biệt', duration: '1:45' }
            ].map((video, idx) => (
              <div key={idx} className="profile-video-slide">
                <div className="profile-video-placeholder-16-9">
                  <div className="profile-video-play">&#9654;</div>
                  <span className="profile-video-label">{video.label}</span>
                </div>
                <div className="profile-video-duration">{video.duration}</div>
              </div>
            ))}
          </div>

          <button className="profile-video-btn profile-video-prev" onClick={handlePrevVideoSlide}>
            <ChevronLeft size={20} />
          </button>
          <button className="profile-video-btn profile-video-next" onClick={handleNextVideoSlide}>
            <ChevronRight size={20} />
          </button>

          <div className="profile-video-dots">
            {[0, 1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className={`profile-video-dot ${currentVideoSlide === index ? 'active' : ''}`}
                onClick={() => goToVideoSlide(index)}
              />
            ))}
          </div>

          <div className="profile-video-count">
            {String(currentVideoSlide + 1).padStart(2, '0')} / {String(totalVideoSlides).padStart(2, '0')}
          </div>
        </div>
      </section>

      <section className="profile-more-section">
        <div className="profile-section-header">
          <h2 className="profile-section-title">Hẹn <em>thêm</em></h2>
          <div className="profile-section-line" />
        </div>

        <div className="profile-more-grid">
          {otherModels.map((otherModel, index) => (
            <div
              key={index}
              className="profile-more-card"
              onClick={() => window.location.href = `/profile?city=${city}&name=${encodeURIComponent(otherModel.name)}`}
            >
              <div className="profile-more-img">
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(135deg, #${String(15 + index * 3).padStart(2, '0')}${String(15 + index * 2).padStart(2, '0')}${String(10 + index).padStart(2, '0')}, #0d0d0d)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '3rem',
                    color: 'rgba(201, 169, 110, 0.12)'
                  }}>
                    {String(index + 2).padStart(2, '0')}
                  </span>
                </div>
                {otherModel.vip && <div className="profile-more-vip">VIP</div>}
                <div className="profile-more-gradient"></div>
              </div>
              <div className="profile-more-info">
                <h3 className="profile-more-name">{otherModel.name}</h3>
                <p className="profile-more-age">{otherModel.age} tuổi · {otherModel.district}</p>
                <div className="profile-more-stats">
                  <div className="profile-more-stat">
                    <span className="pms-label">Giá</span>
                    <span className="pms-value">{otherModel.price}tr</span>
                  </div>
                  <div className="profile-more-stat">
                    <span className="pms-label">Lượt xem</span>
                    <span className="pms-value">{otherModel.views}k</span>
                  </div>
                </div>
                <div className="profile-more-tags">
                  {otherModel.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span key={tagIndex} className="profile-more-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="profile-more-cta">
          <button className="profile-btn-view-all" onClick={() => window.location.href = '/'}>
            Xem tất cả {model?.city}
          </button>
        </div>
      </section>

      <footer className="profile-footer">
        <div className="profile-footer-logo">Lux<em>Date</em></div>
        <div className="profile-footer-text">© 2025 LuxDate · Premium Companion Services</div>
        <button className="profile-nav-cta">Liên hệ ngay</button>
      </footer>
    </div>
  );
}
