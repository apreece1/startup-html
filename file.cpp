#include <iostream>
#include <fstream>
#include <unordered_map>
#include <vector>
#include <string>
#include <random>
#include <algorithm> // Include for transform function

using namespace std;

unordered_map<string, vector<string>> train_basic_model(istream& input) {
    unordered_map<string, vector<string>> model;
    string prev = "";
    string curr;

    while (input >> curr) {
        // Add the word to the model, grouped by the previous word
        model[prev].push_back(curr);

        // Update the previous word
        prev = curr;
    }

    return model;
}

void generate_text(const unordered_map<string, vector<string>>& model, const string& first_word, int num_words, ostream& output) {
    string prev_word = first_word;

    for (int i = 0; i < num_words; ++i) {
        // Find the bucket of words that followed the previous word
        const vector<string>& next_words = model.find(prev_word)->second;

        // Randomly select a word from the bucket
        if (!next_words.empty()) {
            random_device rd;
            mt19937 gen(rd());
            uniform_int_distribution<> dis(0, next_words.size() - 1);
            string curr_word = next_words[dis(gen)];

            // Print the word to the output stream
            output << curr_word << " ";

            // Update the previous word
            prev_word = curr_word;
        } else {
            // If no words follow the previous word, break the loop
            break;
        }
    }
}

int main(int argc, char* argv[]) {
    if (argc != 3) {
        cerr << "Usage: " << argv[0] << " <input_file> <num_words>" << endl;
        return 1;
    }

    ifstream input_file(argv[1]);
    if (!input_file.is_open()) {
        cerr << "Error opening input file: " << argv[1] << endl;
        return 1;
    }

    int num_words = stoi(argv[2]);

    unordered_map<string, vector<string>> model = train_basic_model(input_file);

    generate_text(model, "", num_words, cout);

    return 0;
}