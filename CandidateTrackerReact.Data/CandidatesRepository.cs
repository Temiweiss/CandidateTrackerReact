using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidateTrackerReact.Data
{
    public class CandidatesRepository
    {
        private string _connectionString;
        public CandidatesRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Candidate> GetAll()
        {
            using var context = new CandidatesDataContext(_connectionString);
            return context.Candidates.ToList();
        }
        public void AddCandidate(Candidate candidate)
        {
            using var context = new CandidatesDataContext(_connectionString);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }

        public void ConfirmCandidate(int id)
        {
            using var context = new CandidatesDataContext(_connectionString);
            Candidate CurrentCandidate = context.Candidates.FirstOrDefault(c => c.Id == id);
            CurrentCandidate.Status = Status.Confirmed;
            context.Candidates.Update(CurrentCandidate);
            context.SaveChanges();
        }

        public void RefuseCandidate(int id)
        {
            using var context = new CandidatesDataContext(_connectionString);
            Candidate CurrentCandidate = context.Candidates.FirstOrDefault(c => c.Id == id);
            CurrentCandidate.Status = Status.Refused;
            context.Candidates.Update(CurrentCandidate);
            context.SaveChanges();
        }

        public Candidate GetCandidateById(int id)
        {
            using var context = new CandidatesDataContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }

        public List<Candidate> GetPendingCandidates()
        {
            using var context = new CandidatesDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Pending).ToList();
        }

        public List<Candidate> GetConfirmedCandidates()
        {
            using var context = new CandidatesDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Confirmed).ToList();
        }

        public List<Candidate> GetRefusedCandidates()
        {
            using var context = new CandidatesDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Refused).ToList();
        }

        public int GetPendingCount()
        {
            using var context = new CandidatesDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Pending).Count();
        }

        public int GetConfirmedCount()
        {
            using var context = new CandidatesDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Confirmed).Count();
        }

        public int GetRefusedCount()
        {
            using var context = new CandidatesDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Refused).Count();
        }
    }
}
