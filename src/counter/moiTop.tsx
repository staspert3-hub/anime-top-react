import { motion } from "framer-motion";

// ... остальной код без изменений


const animeList = [
  "Атака Титанов 🔥", "Моя Геройская Академия", "Магическая Битва",
  "Звёздное Дитя", "Голубая Шкафчика (Blue Lock)", "Реджи Ван Пачмен",
  "Человек-Бензопила", "Восхождение в Тени", "Добро Пожаловать в Класс Превосходства",
  "Твоё Имя", "Токийский Гуль", "Hunter x Hunter", "Поднять Уровень в Одиночку",
  "Reincarnated as a Slime", "Безработный Переселился в Мир Фэнтези",
  "Тетрадь Смерти", "NinI Sokamoto", "Эта Фарфоровая Кукла", "Форма Голоса",
  "Сага о Вилландии", "Одинокий Рокер", "Дети Семьи Сюнди"
];

const MoiTop: React.FunctionComponent = () => (
  <div className="min-h-screen py-20 px-4">
    <motion.h1 
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-center mb-16 drop-shadow-2xl"
    >
      🔥 СПИСОК ПРОСМОТРЕНЫХ ТАЙТЛОВ🔥
    </motion.h1>

    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {animeList.map((anime, index) => (
        <motion.div
          key={anime}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          className="group backdrop-blur-xl bg-white/5 border border-white/20 hover:border-white/40 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:bg-white/10 transition-all duration-300 relative"
        >
          
          <h3 className="text-xl font-bold text-white drop-shadow-md mb-3">
            {anime}
          </h3>
        </motion.div>
      ))}
    </div>
  </div>
);

export default MoiTop;

