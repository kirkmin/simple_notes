class NotesController < ApplicationController

	def index
		@notes = Note.all
		render json: @notes
	end

	def show
		@note = Note.find(params[:id])
		render :show
	end

	def create
		@note = Note.create(note_params)

		if @note.save
			render json: @note
		else
			render json: @note.errors.full_messages, status: :unprocessable_entity
		end
	end

	def update
		@note = Note.find(params[:id])

		if @note.update(note_params)
			render :show
		else
			render json: @note.errors.full_messages, status: :unprocessable_entity
		end
	end

	def destroy
		@note = Note.find(params[:id])
		@note.try(:destroy)
		render json: {}
	end

	private
	def note_params
		params.require(:note).permit(:name, :time, :body)		
	end
end
