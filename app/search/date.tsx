import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { X } from 'lucide-react-native';

const MONTHS = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

export default function DatePickerScreen() {
  const router = useRouter();
  const [selectedDates, setSelectedDates] = useState<{
    start?: Date;
    end?: Date;
  }>({});

  const today = new Date();
  const months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(today.getFullYear(), today.getMonth() + i, 1);
    return date;
  });

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isDateSelected = (date: Date) => {
    if (!selectedDates.start || !selectedDates.end) return false;
    return date >= selectedDates.start && date <= selectedDates.end;
  };

  const onDatePress = (date: Date) => {
    if (!selectedDates.start) {
      setSelectedDates({ start: date });
    } else if (!selectedDates.end && date > selectedDates.start) {
      setSelectedDates({ ...selectedDates, end: date });
    } else {
      setSelectedDates({ start: date });
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          headerTitle: 'Select dates',
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <X size={24} color="#000" />
            </Pressable>
          ),
        }} 
      />

      <View style={styles.calendar}>
        {months.map((month) => (
          <View key={month.getTime()} style={styles.month}>
            <Text style={styles.monthTitle}>
              {MONTHS[month.getMonth()]} {month.getFullYear()}
            </Text>

            <View style={styles.weekDays}>
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                <Text key={day} style={styles.weekDay}>{day}</Text>
              ))}
            </View>

            <View style={styles.days}>
              {Array.from({ length: getFirstDayOfMonth(month) }).map((_, i) => (
                <View key={`empty-${i}`} style={styles.emptyDay} />
              ))}

              {Array.from({ length: getDaysInMonth(month) }).map((_, i) => {
                const date = new Date(month.getFullYear(), month.getMonth(), i + 1);
                const isSelected = isDateSelected(date);
                const isStart = selectedDates.start?.getTime() === date.getTime();
                const isEnd = selectedDates.end?.getTime() === date.getTime();

                return (
                  <Pressable
                    key={date.getTime()}
                    style={[
                      styles.day,
                      isSelected && styles.selectedDay,
                      isStart && styles.startDay,
                      isEnd && styles.endDay,
                    ]}
                    onPress={() => onDatePress(date)}
                  >
                    <Text style={[
                      styles.dayText,
                      isSelected && styles.selectedDayText,
                    ]}>
                      {i + 1}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Pressable 
          style={[
            styles.button,
            (!selectedDates.start || !selectedDates.end) && styles.buttonDisabled
          ]}
          disabled={!selectedDates.start || !selectedDates.end}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>Apply</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  calendar: {
    padding: 16,
  },
  month: {
    marginBottom: 24,
  },
  monthTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  weekDays: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  weekDay: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    color: '#666',
  },
  days: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  emptyDay: {
    width: '14.28%',
    aspectRatio: 1,
  },
  day: {
    width: '14.28%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedDay: {
    backgroundColor: '#FF5A5F',
  },
  startDay: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  endDay: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  dayText: {
    fontSize: 14,
  },
  selectedDayText: {
    color: '#fff',
    fontWeight: '500',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  button: {
    backgroundColor: '#FF5A5F',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});